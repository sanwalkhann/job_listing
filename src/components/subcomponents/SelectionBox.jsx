import React, { useState } from "react";

export default function SelectionBox({ info, onKeywordSelect }) {
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const keywords = [...new Set(info.flatMap((item) => [...item.languages, item.role, item.level, ...item.tools]))];

  const optionKeywords = keywords.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  const handleSelection = (e) => {
    const selectedKeyword = e.target.value;
    
    // Update the selectedKeywords state
    setSelectedKeywords((prevSelected) => [...prevSelected, selectedKeyword]);

    // Call the onKeywordSelect function with the selected keyword
    onKeywordSelect(selectedKeyword);
  };

  // Filter job cards based on selected keywords
  const filteredJobCards = info.filter((item) =>
    selectedKeywords.every((keyword) =>
      [...item.languages, item.role, item.level, ...item.tools].includes(keyword)
    )
  );

  return (
    <div className="select-box-wrapper flex w-full justify-center">
      <div className="select-box mx-6 -mt-28 grid w-full max-w-7xl gap-3 rounded-md bg-white p-6 px-5 text-[var(--Desaturated-Dark-Cyan)] shadow-md child:child:border-l-[5px] child:child:outline-none dark:bg-[#00303d] sm:-mt-[4.3rem] sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 md:-mt-11 md:grid-cols-4 md:grid-rows-1 md:gap-6">
        <label
          htmlFor="keywords"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          <select
            id="keywords"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 px-4 text-lg  text-gray-900 transition duration-300 focus:border-l-[var(--Desaturated-Dark-Cyan)] dark:bg-[#005066] dark:border-none dark:text-[#e6e6e6f0]"
            onChange={handleSelection}
            aria-label="Select a keyword"
          >
            {optionKeywords}
          </select>
        </label>
      </div>

      {/* Display the filtered job cards */}
      {filteredJobCards.map((job) => (
        <div key={job.id}>
          {/* Render the filtered job cards */}
          {/* You can use the same structure as your JobCards component */}
        </div>
      ))}
    </div>
  );
}
