import express from "express";
import { readFile } from "fs/promises";
import { mongoConnect } from "./src/configs/mongoDB.js";
import { authRouter } from "./src/routes/Auth/authRoutes.js";
import heroSectionRouter from "./src/routes/HeroSection/heroSectionroutes.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

import delhiHeroSectionRouter from "./src/routes/HeroSection/delhiHeroSectionRoutes.js";

import cors from "cors";
import footerRouter from "./src/routes/Footer/footerRoutes.js";

import delhiFooterRouter from "./src/routes/Footer/delhiFooterRoutes.js";

import locationRouter from "./src/routes/location/locationRoutes.js";
import contactRouter from "./src/routes/contact/contactRoute.js";
import mailRouter from "./src/routes/Mail/mailRoutes.js";
import blogRouter from "./src/routes/blog/blogRoutes.js";
import emailRouter from "./src/routes/email/emailRoutes.js";
import path from "path";
import { City } from "./src/models/location/locationModel.js";

const app = express();
const PORT = 6500;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// mongoConnect :: connecting the mongodb database
mongoConnect();

app.use("/uploads", express.static("uploads"));
app.use(express.json());

app.use(
  cors(
    process.env.NODE_ENV === "development"
      ? {
          origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:5010",
            "http://localhost:5175/",
            "https://khadak-mern.vercel.app",
            "https://khadak-mern-s8ce.vercel.app/",
            "https://delhimazza.com",
            "https://delhimazza.com/admin",
            "https://admin.delhimazza.com/",
            "https://www.delhimazza.com/",
            "https://www.admin.delhimazza.com/",
            "https://admin.delhimazza.com",
            "https://www.delhimazza.com",
            "http://localhost:6500",
            "https://khdakserverside.onrender.com",
          ],
          credentials: true,
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          exposedHeaders: ["*", "Authorization"],
        }
      : {
          origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:5010",
            "http://localhost:5176/",
            "https://khadak-mern.onrender.com/api/v1",
            "https://khadak-mern.vercel.app",
            "https://khadak-mern-s8ce.vercel.app",
            "https://delhimazza.com",
            "https://delhimazza.com/admin",
            "https://admin.delhimazza.com/",
            "https://www.delhimazza.com/",
            "https://www.admin.delhimazza.com/",
            "https://admin.delhimazza.com",
            "https://www.delhimazza.com",
            "http://localhost:6500",
            "https://khdakserverside.onrender.com",
          ],
          credentials: true,
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          exposedHeaders: ["*", "Authorization"],
        }
  )
);
// -----root route for the express app
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/heroSection", heroSectionRouter);
app.use("/api/v1/footer", footerRouter);
app.use("/api/v1/location", locationRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/mail", mailRouter);
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/email", emailRouter);
app.use("/api/v1/delhiHeroSection", delhiHeroSectionRouter);
app.use("/api/v1/delhiFooter", delhiFooterRouter);

// serve static files from the react build folder
app.use(express.static(path.join(__dirname, "./Frontend/dist")));

// catch all routes for react spa

const locality = [];
let notFound = false;

// function to get all localities
// const getLocalities = async () => {
//   const data = await City.find();

//   for (let i = 0; i < data.length; i++) {
//     locality.push(data[i]?.name);
//     for (let j = 0; j < data[i]?.localities?.length; j++) {
//       locality.push(data[i]?.localities[j]);
//     }
//   }
//   return locality;
// };

app.get("*", async (req, res) => {
  // const locality = await getLocalities();

  let location = "";
  let title, descriptoin;
  console.log(req.url);
  if (req.url === "/blog/") {
    title = "Blog - Delhi Mazza Call Girls & Escorts Latest News";
    descriptoin = `"Delhi Mazza Call Girls & Escorts blogs, Latest News, Article and Contact WhatsApp Number with Profile List in Indian Cities"`;
  } else if (req.url === "/contact-us/") {
    title = "Contact Us - Delhi Mazza Call Girls and Escort Profiles";
    descriptoin = `"Contact Us at Delhi Mazza For Advertising, Booking and Reports Profile Listing"`;
  } else if (req.url.includes("call-girls-in-")) {
    const match = req.url?.match(/call-girls-in-(.*)\//);
    if (match) {
      location = match[1].replace(/-/g, " ");
    }
    const data = await City.find({
      $or: [
        {
          localities: { $in: new RegExp(location, "i") },
        },
        {
          name: { $in: new RegExp(location, "i") },
        },
      ],
    });

    if (data) {
      {
        // console.log("locality", locality);
        title = `Call Girls in ${location}, Escort Service Available 24x7 in ${location}`;
        descriptoin = `"Being one of the top call girls in ${location} adverts it features best call girl Contact Numbers, and online escort girl booking 24x7 for Home And Hotel Room Services."`;
      }
    }

    // let locality = await City.findOne({ localities: location });
    // console.log(locality, city);
  } else if (req.url !== "/favicon.ico") {
    notFound = true;
  } else {
    notFound = false;
  }

  const filePath = path.resolve(__dirname, "Frontend/dist", "index.html");
  let htmlContent = await readFile(filePath, "utf-8");

  // replace title
  htmlContent = htmlContent.replace(
    /<title>.*<\/title>/,
    `<title>${title}</title>`
  );

  htmlContent = htmlContent.replace(
    /<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/,
    `<meta name="description" content=${descriptoin} data-rh="true" data-react-helmet="true"/>`
  );

  res.send(notFound ? "404 Page not found" : htmlContent);
});

app.listen(PORT, () => {
  console.log(` app is running on http://localhost:${PORT}`);
});
