import React, { useEffect, useState } from "react";
import axios from "axios";
import CallGirlsList from "../../components/CallGirlslist/CallGirlsList";
import Location from "../../components/Location/Location";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import CallGirls from "../call girls/CallGirls";
import { changeCity, changeLocality } from "../../features/slices/contactSlice";
import HeroSectionskeleton from "../../components/SkeletonUI/HeroSectionskeleton";
import parse from "html-react-parser";

const Home = () => {
  const params = useParams();
  const navigate = useNavigate();
  const city = params?.city?.toString()?.toLowerCase();

  // useState
  const [heroSectionData, setHeroSectionData] = useState(null);
  const [footerSectionData, setFooterSectionData] = useState(null);
  const [metaDescription, setMetaDescription] = useState(
    "Being one of the top call girls in [city] adverts it features best call girl Contact Numbers, and online escort girl booking 24x7 for Home And Hotel Room Services."
  );
  const [metaTitle, setMetaTitle] = useState(
    "Call Girls in [city], Escort Service Available 24x7 in [city]"
  );

  // -----------------------------------Hooks----------------------------------------
  const { cityName, locality } = useSelector((state) => state.contact);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  // --------------------------------------------------------------------------------

  if (!params.city) {
    dispatch(changeCity("Delhi"));
    dispatch(changeLocality(""));
  }

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // getting the hero section data

  const getDehiHeroSectionData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/delhiHeroSection`);

      setHeroSectionData(response?.data?.data[0]);
    } catch (error) {}
  };

  const delhiFooterSection = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/delhiFooter`);

      setFooterSectionData(response?.data?.data);
    } catch (error) {}
  };

  const getHeroSectionData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/heroSection`);

      setHeroSectionData(response?.data?.data[0]);
    } catch (error) {}
  };

  const FooterSection = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/footer`);

      setFooterSectionData(response?.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  if (heroSectionData) {
    heroSectionData?.description?.replace(
      /\[location\]/g,
      (
        locality && locality[0]?.toLowerCase() + locality.slice(1)
      )?.toLowerCase() ||
        cityName[0]?.toLowerCase() + cityName?.slice(1)?.toLowerCase() ||
        "delhi"
    );
  }
  // useEffects
  useEffect(() => {
    console.log("cityname", cityName);
    console.log("locality", locality);
    if (cityName) {
      if (locality == "" && cityName?.toLowerCase() == "delhi") {
        getDehiHeroSectionData();
        delhiFooterSection();
      } else {
        getHeroSectionData();
        FooterSection();
      }
    }

    // navigate(`${params?.city?.toLowerCase()}`);

    // setSearchParams((params) => {
    //   params.set("city", `${cityName}`);
    //   return params;
    // });
  }, [cityName, location]);

  // redirect to home for a specific route
  useEffect(() => {
    console.log(params?.city);
    if (params.city === "cheap-call-girls-in-delhi") {
      navigate("/");
    }
  }, []);

  return (
    <div className="items-center px-4 max-w-screen-2xl mx-auto md:px-8">
      <section class="bg-white ">
        {heroSectionData ? (
          <div class=" px-4 mx-auto max-w-screen-xl text-center pt-4 lg:pt-8 lg:px-12">
            <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl ">
              {heroSectionData?.title?.replace(
                /\[city\]/g,
                (locality && locality).replace(/\b\w/g, (match) =>
                  match.toUpperCase()
                ) || cityName.replace(/\b\w/g, (match) => match.toUpperCase())
              )}
            </h1>

            <Helmet>
              <title>
                {" "}
                {`${metaTitle?.replace(
                  /\[city\]/g,
                  (locality && locality).replace(/\b\w/g, (match) =>
                    match.toUpperCase()
                  ) ||
                    cityName.replace(/\b\w/g, (match) => match.toUpperCase()) ||
                    "Delhi"
                )}`}
              </title>
              <link rel="canonical" href={`${window?.location?.href}`} />
              <meta
                name="description"
                content={`${metaDescription?.replace(
                  /\[city\]/g,
                  (locality && locality).replace(/\b\w/g, (match) =>
                    match.toUpperCase()
                  ) ||
                    cityName.replace(/\b\w/g, (match) => match.toUpperCase()) ||
                    "Delhi"
                )}`}
              />
            </Helmet>

            {/* <div
              id="HeroSectionDescription"
              dangerouslySetInnerHTML={{
                __html: heroSectionData?.description
                  ?.replace(
                    /\[city\]/g,
                    (locality && locality).replace(/\b\w/g, (match) =>
                      match.toUpperCase()
                    ) ||
                      (cityName && cityName).replace(/\b\w/g, (match) =>
                        match.toUpperCase()
                      ) ||
                      "Delhi"
                  )
                  ?.replace(
                    /\[location\]/g,
                    (locality && locality?.toString().toLowerCase())
                      .trim()
                      .replace(/ /g, "-") ||
                      (cityName && cityName?.toString().toLowerCase())
                        .trim()
                        .replace(/ /g, "-") ||
                      "delhi"
                  ),
              }}
              className=" text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-28 dark:text-gray-400"
            ></div> */}
            <div
              id="HeroSectionDescription"
              className=" text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-28 dark:text-gray-400"
            >
              {parse(
                heroSectionData?.description
                  ?.replace(
                    /\[city\]/g,
                    (locality && locality).replace(/\b\w/g, (match) =>
                      match.toUpperCase()
                    ) ||
                      (cityName && cityName).replace(/\b\w/g, (match) =>
                        match.toUpperCase()
                      ) ||
                      "Delhi"
                  )
                  ?.replace(
                    /\[location\]/g,
                    (locality && locality?.toString().toLowerCase())
                      .trim()
                      .replace(/ /g, "-") ||
                      (cityName && cityName?.toString().toLowerCase())
                        .trim()
                        .replace(/ /g, "-") ||
                      "delhi"
                  )
              )}
            </div>
          </div>
        ) : (
          <HeroSectionskeleton />
        )}
      </section>
      <section class=" ">
        <div class=" px-4 mx-auto max-w-screen-xl text-center  lg:px-12">
          <CallGirlsList BASE_URL={BASE_URL} />
          {/* <CallGirlsList />
          <CallGirlsList /> */}

          <div className=" rounded-xl p-6 mb-10 text-start bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 text-[18px]">
            {footerSectionData &&
              footerSectionData?.length > 0 &&
              footerSectionData.map((data) => {
                return (
                  <>
                    {/* <p className="text-3xl font-semibold text-rose-500 mt-7 mb-3 ">
                      {" "}
                      {data?.title}kk
                    </p> */}
                    {/* <div
                      dangerouslySetInnerHTML={{
                        __html: data?.description
                          ?.replace(
                            /\[city\]/g,
                            (locality && locality).replace(/\b\w/g, (match) =>
                              match.toUpperCase()
                            ) ||
                              cityName.replace(/\b\w/g, (match) =>
                                match.toUpperCase()
                              ) ||
                              "Delhi"
                          )
                          ?.replace(
                            /\[location\]/g,
                            (locality && locality?.toString().toLowerCase())
                              .trim()
                              .replace(/ /g, "-") ||
                              (cityName && cityName?.toString().toLowerCase())
                                .trim()
                                .replace(/ /g, "-") ||
                              "delhi"
                          ),
                      }}
                    ></div> */}
                    <div>
                      {parse(
                        data?.description
                          ?.replace(
                            /\[city\]/g,
                            (locality && locality).replace(/\b\w/g, (match) =>
                              match.toUpperCase()
                            ) ||
                              cityName.replace(/\b\w/g, (match) =>
                                match.toUpperCase()
                              ) ||
                              "Delhi"
                          )
                          ?.replace(
                            /\[location\]/g,
                            (locality && locality?.toString().toLowerCase())
                              .trim()
                              .replace(/ /g, "-") ||
                              (cityName && cityName?.toString().toLowerCase())
                                .trim()
                                .replace(/ /g, "-") ||
                              "delhi"
                          )
                      )}
                    </div>
                  </>
                );
              })}
          </div>

          <Location BASE_URL={BASE_URL} />
          <CallGirls />
        </div>
      </section>
    </div>
  );
};

export default Home;
