import React, { useState } from "react";

const DonationSection2 = ({ label, name, options }) => {
  const [selected, setSelected] = useState("");
  const [otherValue, setOtherValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    if (value !== "Other") {
      setOtherValue("");
    }
  };

  const handleOtherInput = (e) => {
    let value = e.target.value;
    if (value === "") {
      setOtherValue("");
      return;
    }
    if (!value.startsWith("$")) {
      value = "$" + value.replace(/^\$*/, "");
    }
    setOtherValue(value);
  };

  return (
    <div className="bg-white p-4 rounded shadow flex flex-wrap items-center  justify-between text-black">
      <label className="block font-medium mb-1 text-sm sm:text-base md:text-lg ">
        {label}
      </label>
      <div className="flex flex-wrap items-center justify-between gap-8">
        {options.map((amount, i) => {
          if (amount === "Other" && selected === "Other") {
            return null; // Hide 'Other' radio if selected
          }
          return (
            <label
              key={i}
              htmlFor={`${name}-${i}`}
              className={`flex items-center gap-1 text-sm sm:text-base md:text-lg cursor-pointer ${
                selected === amount ? "font-bold text-green-800" : ""
              }`}
            >
              <input
                type="radio"
                id={`${name}-${i}`}
                name={name}
                value={amount}
                onChange={handleChange}
                checked={selected === amount}
                className="accent-orange-600"
              />
              {amount}
            </label>
          );
        })}
        {selected === "Other" && (
          <input
            type="text"
            placeholder="Enter amount"
            value={otherValue}
            onChange={handleOtherInput}
            className="border border-gray-300 rounded px-2 py-1 w-24 font-bold text-black sm:text-base"
          />
        )}
      </div>
    </div>
  );
};

export default DonationSection2;
