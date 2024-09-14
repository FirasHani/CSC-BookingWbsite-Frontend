import React, { useState } from "react";

export default function CodeGenerator2() {
  const [inputData, setInputData] = useState("");
  const [generatedResult, setGeneratedResult] = useState("");
  const [textOption, setTextOption] = useState(""); // State for the "Add Text" select
  const [somethingOption, setSomethingOption] = useState(""); // State for the "Something" select

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputData(value);
    // Example logic to generate result based on input data and selected options
    setGeneratedResult(`Generated result based on: ${value}, Add Text: ${textOption}, Something: ${somethingOption}`);
  };

  const handleTextOptionChange = (e) => {
    setTextOption(e.target.value);
    // Update generated result when option changes
    setGeneratedResult(`Generated result based on: ${inputData}, Add Text: ${e.target.value}, Something: ${somethingOption}`);
  };

  const handleSomethingOptionChange = (e) => {
    setSomethingOption(e.target.value);
    // Update generated result when option changes
    setGeneratedResult(`Generated result based on: ${inputData}, Add Text: ${textOption}, Something: ${e.target.value}`);
  };

  return (
    <section className="bg-gray-2 py-20 dark:bg-dark">
      <div className="container">
        <div className="mx-auto w-full max-w-[1100px] space-y-12">
          <div className="rounded-xl border border-stroke bg-white p-8 dark:border-dark-3 dark:bg-dark-2">
            <p className="mb-6 text-lg font-semibold text-dark dark:text-white">
              Email
            </p>
            <div className="space-y-6">
              {/* Textarea for generated result */}
              <textarea
                value={generatedResult}
                readOnly
                rows="7"
                placeholder="Generated result will appear here."
                className="w-full rounded-lg border border-stroke bg-transparent p-5 text-base text-dark placeholder-dark-6 outline-none dark:border-dark-3 dark:text-white"
              ></textarea>

              {/* Textarea for input data */}
              <textarea
                value={inputData}
                onChange={handleInputChange}
                rows="7"
                placeholder="Type here a detailed description of what you want to generate."
                className="w-full rounded-lg border border-stroke bg-transparent p-5 text-base text-dark placeholder-dark-6 outline-none focus:border-primary dark:border-dark-3 dark:text-white"
              ></textarea>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-4 pt-7">
              <div className="flex flex-wrap gap-5">
                <div>
                  <label
                    htmlFor=""
                    className="mb-2 block text-base font-medium text-dark dark:text-white"
                  >
                    Add Text
                  </label>
                  <div className="relative">
                    <select
                      value={textOption}
                      onChange={handleTextOptionChange}
                      className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-2.5 pl-4 pr-10 text-dark outline-none dark:border-dark-3 dark:text-white"
                    >
                      <option value="">Select an option</option>
                      <option value="Professional">Professional</option>
                      <option value="Mid Label">Mid Label</option>
                      <option value="Beginner">Beginner</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 11.4C7.85 11.4 7.725 11.35 7.6 11.25L1.85 5.6C1.625 5.375 1.625 5.025 1.85 4.8C2.075 4.575 2.425 4.575 2.65 4.8L8 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.4 11.2C8.275 11.325 8.15 11.4 8 11.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="mb-2 block text-base font-medium text-dark dark:text-white"
                  >
                    Something
                  </label>
                  <div className="relative">
                    <select
                      value={somethingOption}
                      onChange={handleSomethingOptionChange}
                      className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-2.5 pl-4 pr-10 text-dark outline-none dark:border-dark-3 dark:text-white"
                    >
                      <option value="">Select an option</option>
                      <option value="Name">Name</option>
                      <option value="Date">Date</option>
                      <option value="Text">Text</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 11.4C7.85 11.4 7.725 11.35 7.6 11.25L1.85 5.6C1.625 5.375 1.625 5.025 1.85 4.8C2.075 4.575 2.425 4.575 2.65 4.8L8 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.4 11.2C8.275 11.325 8.15 11.4 8 11.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <button className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-white hover:bg-primary/90 md:max-w-[270px]">
                <span className="max-xs:hidden">Send Email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
