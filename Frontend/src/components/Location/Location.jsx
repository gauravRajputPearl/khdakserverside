import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  getLocationData,
  selectedLocation,
} from "../../features/slices/locationSlice";
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { changeCity, changeLocality } from "../../features/slices/contactSlice";

const Location = ({ BASE_URL }) => {
  const [location, setLocation] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const params = useParams();

  // const selectedCity = params?.city;
  const selectedCity = useSelector((state) => state?.contact?.cityName);

  const dispatch = useDispatch();

  const getLocation = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/location/City`);
      setLocation(response?.data?.data);
      dispatch(getLocationData(response?.data?.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const localityHandler = (locality) => {
    dispatch(changeLocality(locality));
    navigate(
      `/call-girls-in-${locality.toLowerCase().trim().replace(/ /g, "-")}/`
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (params?.city && location) {
      const urlLocality = params.city.split("-").slice(3).join(" "); // Extracting locality name

      const matchedLocation = location.find((loc) =>
        loc.localities.some((locality) => {
          console.log(locality.toLowerCase());
          return locality.toLowerCase().trim() === urlLocality.toLowerCase();
        })
      );

      const matchedCity = location.find((city) => {
        return city.name?.toLowerCase() === urlLocality.toLowerCase();
      });

      if (matchedLocation || matchedCity) {
        console.log("yes");
        dispatch(changeCity(matchedLocation?.name || matchedCity?.name));
        dispatch(changeLocality(urlLocality));
      } else {
        console.log("no");
        navigate("/not-found");
      }
    }
  }, [params, location]);

  return (
    <div className="w-full p-4 bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 mb-5">
      <h5 className="text-2xl font-bold sm:text-4xl">
        Areas of Top Call Girls in{" "}
        {selectedCity.replace(/\b\w/g, (match) => match.toUpperCase())}
      </h5>
      {Array.isArray(location) &&
        location.length > 0 &&
        location.map((data) => {
          const isLocation = location.includes("noida");
          // if (isLocation) {
          //   console.log("yes");
          // }

          {
            const urlcity =
              params?.city?.split("-").slice(3).join(" ") ===
              data?.name?.toLowerCase();
            if (urlcity) {
              dispatch(changeCity(data?.name));
              dispatch(changeLocality(""));
            }
          }
          if (data?.name?.toLowerCase() == selectedCity.toLowerCase()) {
            return (
              <div className="my-8">
                {/* <h1 className="text-3xl text-left text-rose-500">{data?.name}</h1> */}
                <div className="flex flex-wrap  text-pink-600 font-semibold  w-full gap-5">
                  {data?.localities.map((locality) => {
                    return (
                      <p
                        className="text-xl mx-5 text-bold border border-white p-1 rounded-lg bg-white cursor-pointer"
                        onClick={() => {
                          localityHandler(locality);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        {" "}
                        {locality}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Location;
