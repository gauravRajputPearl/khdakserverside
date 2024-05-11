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
import { Blog } from "./src/models/blogModel/blogModel.js";
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
let notHome = false;

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
  const filePath = path.resolve(__dirname, "Frontend/dist", "index.html");
  let htmlContent = await readFile(filePath, "utf-8");
  let location = "";
  let title, descriptoin;

  if (req.url === "/blog/") {
    console.log("blogpagekdkfjdjf", req.url);
    notFound = false;
    notHome = true;
    title = "Blog - Delhi Mazza Call Girls & Escorts Latest News";
    descriptoin = `"Delhi Mazza Call Girls & Escorts blogs, Latest News, Article and Contact WhatsApp Number with Profile List in Indian Cities"`;
  } else if (req.url.startsWith("/blog/")) {
    console.log(
      "inside blog section-------------------------------------------------------------"
    );

    notFound = false;
    notHome = true;
    const blogPostSlug = req.url.substring(6)?.replace(/-/g, " ");

    const data1 = await Blog.findOne({
      title: new RegExp("^" + blogPostSlug + "$", "i"),
    });

    if (!data1) {
      notFound = true;
      notHome = true;
      console.log("not data 1", notFound);
    } else {
      title = data1?.title;
      descriptoin = `"${data1?.description
        ?.replace(/<[^>]+>/g, "")
        .slice(0, 60)}"`;
      notFound = false;
      notHome = true;
    }
  } else if (req.url === "/not-found/") {
    notFound = false;
    notHome = true;
    htmlContent = htmlContent.replace(/<meta\s+name="robots"\s+content=".*?"\s*\/?>/i, '');
    res.setHeader('X-Robots-Tag', 'noindex');

  } else if (req.url === "/privacy-policy") {
    notFound = false;
    notHome = true;
    title = "privacy policy - Delhi Mazza Call Girls and Escort Profiles";
    descriptoin = `"privacy policy - Delhi Mazza Call Girls and Escort Profiles"`;
  } else if (req.url === "/terms-and-conditions") {
    notFound = false;
    notHome = true;
    title = "Terms & Conditions - Delhi Mazza Call Girls and Escort Profiles";
    descriptoin = `"Terms & Conditions - Delhi Mazza Call Girls and Escort Profiles"`;
  } else if (req.url === "/contact-us/") {
    notFound = false;
    notHome = true;
    title = "Contact Us - Delhi Mazza Call Girls and Escort Profiles";
    descriptoin = `"Contact Us at Delhi Mazza For Advertising, Booking and Reports Profile Listing"`;
  } else if (req.url.includes("call-girls-in-")) {
    notFound = false;
    notHome = true;
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
    const newLocation = location.replace(/\b\w/g, (match) =>
      match.toUpperCase()
    );

    if (data) {
      {
        // console.log("locality", locality);
        title = `Call Girls in ${newLocation}, Escort Service Available 24x7 in ${newLocation}`;
        descriptoin = `"Being one of the top call girls in ${newLocation} adverts it features best call girl Contact Numbers, and online escort girl booking 24x7 for Home And Hotel Room Services."`;
      }
    }

    // let locality = await City.findOne({ localities: location });
    // console.log(locality, city);
  } else if (!req.url) {
    console.log("log1", req.url);

    notFound = false;
    notHome = true;
  } else {
    notFound = true;
    notHome = true;
  }

  // process.exit()
  

  // replace title
  htmlContent = htmlContent.replace(
    /<title>.*<\/title>/,
    `<title>${title}</title>`
  );

  // replace og.Title meta tag
  htmlContent = htmlContent.replace(
    /<meta\s+property="og:title"\s+content="([^"]*)"\s*\/?>/,
    ` <meta property="og:title" content="${title}">`
  );

  // replace og.Description meta tag
  htmlContent = htmlContent.replace(
    /<meta\s+property="og:description"\s+content="([^"]*)"\s*\/?>/,
    ` <meta property="og:description" content=${descriptoin}>`
  );

  // replace og:image:alt meta tag
  htmlContent = htmlContent.replace(
    /<meta\s+property="og:image:alt"\s+content="([^"]*)"\s*\/?>/,
    ` <meta property="og:image:alt" content="${title}">`
  );
  // replace og url
  htmlContent = htmlContent.replace(
    /<meta\s+property="og:url"\s+content="([^"]*)"\s*\/?>/,
    `<meta property="og:url" content="https://www.delhimazza.com${req?.url}" />`
  );

  // Remove Twitter title meta tag
  htmlContent = htmlContent.replace(
    /<meta\s+name="twitter:title"\s+content="([^"]*)"\s*\/?>/,
    `<meta name="twitter:title" content="${title}">`
  );

  // Remove Twitter description meta tag
  htmlContent = htmlContent.replace(
    /<meta\s+name="twitter:description"\s+content="([^"]*)"\s*\/?>/,
    `<meta name="twitter:description" content=${descriptoin}>`
  );

  // Remove Twitter image alt meta tag
  htmlContent = htmlContent.replace(
    /<meta\s+name="twitter:image:alt"\s+content="([^"]*)"\s*\/?>/,
    `<meta name="twitter:image:alt" content="${title}">`
  );
  // if not home url, then remove these from the index.html
  if (notHome) {
    // Remove dcterms.Title meta tag
    htmlContent = htmlContent.replace(
      /<meta\s+name="dcterms.Title"\s+content="([^"]*)"\s*\/?>/,
      ""
    );

    // Remove dcterms.Description meta tag
    htmlContent = htmlContent.replace(
      /<meta\s+name="dcterms.Description"\s+content="([^"]*)"\s*\/?>/,
      ""
    );
    // remove the script from the other pages than home page
    htmlContent = htmlContent.replace(
      /<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
      ""
    );
  }

  htmlContent = htmlContent.replace(
    /<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/,
    `<meta name="description" content=${descriptoin} data-rh="true" data-react-helmet="true"/>`
  );

  // app.use((req, res, next) => {
  notFound ? res.setHeader('X-Robots-Tag', 'noindex').redirect("/not-found/") : res.send(htmlContent);
  // });
});

app.listen(PORT, () => {
  console.log(` app is running on http://localhost:${PORT}`);
});
