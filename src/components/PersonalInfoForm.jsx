import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

const PersonalInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const getStates = (country) => stateOptions[country] || stateOptions.default;

  const inputOptions = ["First Name", "Last Name", "Address", "City"];
  const contactOptions = ["Zip", "Phone", "Email"];
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "India",
    "Pakistan",
    "China",
    "Japan",
  ];

  const stateOptions = {
    "United States": ["California", "Texas", "New York", "Florida"],
    Canada: ["Ontario", "Quebec", "British Columbia"],
    India: ["Maharashtra", "Delhi", "Karnataka"],
    Pakistan: ["Punjab", "Sindh", "KPK"],
    default: ["N/A"],
  };

  return (
    <div className="p-4 rounded">
      <div>
        <SectionHeader title="Personal Information" />
        <div className="bg-gray-200 p-4 rounded space-y-4">
          {inputOptions.map((option, index) => (
            <div key={index}>
              <label
                key={index}
                for={option}
                className="py-0.5 text-normal font-semibold ml-3"
              >
                {option}
              </label>

              <input
                key={index}
                type="text"
                placeholder={option}
                className="w-full h-15 border rounded-xl bg-gray-50 text-left px-3 text-gray-400"
              ></input>
            </div>
          ))}

          {/* Country */}
          <div>
            <label
              for="Country"
              className="py-0.5 text-normal font-semibold ml-3"
            >
              Country
            </label>
            <select
              className="w-full h-15 border rounded-xl bg-gray-50 text-left px-3 text-gray-400"
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option>Select Country</option>
              {countries.map((country, i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          {/* State */}
          <div>
            <label
              for="State"
              className="py-0.5 text-normal font-semibold ml-3"
            >
              State
            </label>
            <select className="w-full h-15 border rounded-xl bg-gray-50 text-left text-gray-400 px-3">
              <option>Select State</option>
              {getStates(selectedCountry).map((state, i) => (
                <option key={i} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          {/* Contact Option */}
          <div>
            {contactOptions.map((cont, index) => (
              <div key={index}>
                <label
                  key={index}
                  for={cont}
                  className="py-0.5 text-normal font-semibold ml-3"
                >
                  {cont}
                </label>
                <input
                  key={index}
                  type={cont === "Email" ? "email" : "text"}
                  placeholder={cont}
                  className="w-full h-15 border rounded-xl bg-gray-50 text-left text-gray-400 px-3"
                />
              </div>
            ))}
            {/* Comment Area */}
            <div>
              <label
                for="Comment"
                className="py-0.5 text-normal font-semibold ml-3 text-black"
              >
                Comment
              </label>
              <textarea
                placeholder="Comment"
                rows="6"
                className="w-full border rounded-xl bg-gray-50 text-left text-gray-400 px-3 resize-none"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      {/* Payment Details */}

      <div className="min-w-[40%]">
        <SectionHeader title="Payment Details" />
        <div className="bg-gray-200 p-6 rounded shadow text-black space-y-4">
          {/* Card buttons */}
          {/* <div className="flex items-center justify-center gap-0 w-full">
            <button className="bg-orange-500 text-white font-medium px-4 py-2 border-2 border-black rounded-l-full">
              Credit/Debit Card
            </button>
            <button className="bg-gray-300 px-4 py-2 font-medium border-t-2 border-r-2 border-b-2 border-black">
              US Bank Account
            </button>
          </div> */}
          <nav class="nav nav-pills nav-justified mb-2">
            <a
              class="nav-item bg-orange-500 text-white font-medium px-4 py-2 border-2 border-black rounded-l-lg decoration-0"
              aria-current="page"
              href="#"
            >
              Credit/Debit Card
            </a>
            <a
              class="nav-item  text-black font-medium px-4 py-2 border-2 border-black rounded-r-lg"
              href="#"
            >
              Bank Account
            </a>
          </nav>

          {/* Name on Card */}
          <div>
            <label
              for="Name on Card"
              className="py-0.5 text-normal font-semibold ml-3"
            >
              Name on Card
            </label>
            <input
              type="text"
              placeholder="Name on Card"
              className="w-full h-15 border rounded-xl bg-gray-50 text-left text-gray-400 px-3"
            />
          </div>
          {/* Card number */}
          <div>
            <label
              for="Card Number"
              className="py-0.5 text-normal font-semibold ml-3"
            >
              Card Number
            </label>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full h-15 border rounded-xl bg-gray-50 text-left text-gray-400 px-3"
            />
          </div>
          {/*  Card Details*/}
          <div className="flex flex-row gap-2 justify-between w-full">
            <div className="w-full mx-2">
              <div>
                <label
                  for="Month"
                  className="py-0.5 text-normal text-center font-semibold ml-3"
                >
                  Month
                </label>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Month"
                  className="w-full h-12 border rounded-xl bg-gray-50 text-left px-3 text-gray-400"
                />
              </div>
            </div>
            <div className="w-full mx-2">
              <div>
                <label
                  for="Year"
                  className="py-0.5 text-normal text-center font-semibold ml-3"
                >
                  Year
                </label>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Year"
                  className="w-full h-12 border rounded-xl bg-gray-50 text-left px-3 text-gray-400"
                />
              </div>
            </div>
            <div className="w-full mx-2">
              <div>
                <label
                  for="Month"
                  className="py-0.5 text-normal text-center font-semibold ml-3"
                >
                  CVV
                </label>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full h-12 border rounded-xl bg-gray-50 text-left px-3 text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Post buttons */}
        <div className="w-full flex items-center justify-center  mt-4">
          {/* <div className="flex gap-2"> */}
          <button className="w-1/2 bg-orange-600 text-white mx-4 py-2 rounded font-medium">
            Submit
          </button>
          <button className="w-1/2 mx-4 py-2 rounded border-2 border-orange-400 bg-transparent text-orange-400 font-medium">
            Reset
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
