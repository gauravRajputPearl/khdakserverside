import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/delhimazzaLogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div>
      <div className="border border-red-500 border-solid border-2 mx-5">
        <p className="text-red-500 mx-5 p-5">
          <span className="text-xl font-semibold">Important Information: </span>{" "}
          DO NOT PAY IN ADVANCE - We are not responsible for any fraud, other
          than serving as an informational resource, this website exists for
          advertising only. The individuals listed on the website are not
          affiliated with us.
        </p>
      </div>
      <footer class="bg-red-600 dark:bg-gray-900 mt-2 ">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <Link href="/" class="flex items-center">
                <img src={logo} class="h-16 w-56 me-3" alt=" Logo" />
              </Link>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-white">
              <div>
                <div class="mb-6 text-sm font-semibold uppercase dark:text-white">
                  DelhiMazza
                </div>
                <ul class=" dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <Link href="https://flowbite.com/" class="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="contact-us/" class="hover:underline">
                      Contact-us
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul class="text-black dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <Link
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline "
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Discord
                    </Link>
                  </li>
                </ul>
              </div> */}
              <div>
                <div class="mb-6 text-sm font-semibold  uppercase dark:text-white">
                  Legal
                </div>
                <ul class=" dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <Link to="/privacy-policy" class="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions" class="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm sm:text-center text-white dark:text-gray-400">
              © 2024{" "}
              <Link href="/" class="hover:underline uppercase">
                DelhiMazza
              </Link>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <Link href="#" class="text-black hover:text-gray-900  ms-5">
                <FacebookIcon fontSize="medium" />
                <span class="sr-only">Facebook account</span>
              </Link>
              <Link href="#" class="text-black hover:text-gray-900 ms-5">
                <XIcon fontSize="medium" />
                <span class="sr-only">Twitter page</span>
              </Link>
              <Link href="#" class="text-black hover:text-gray-900  ms-5">
                <PinterestIcon fontSize="medium" />
                <span class="sr-only">Pinterest page</span>
              </Link>
              <Link href="#" class="text-black hover:text-gray-900  ms-5">
                <LinkedInIcon fontSize="medium" />
                <span class="sr-only">Linkedin page</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
