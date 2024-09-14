import React from "react";

export default function Contact11() {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-16 md:py-20 lg:py-28 dark:bg-dark">
      <a 
        href="/Service" 
        className="inline-block" 
        rel="noopener noreferrer"
      >
        <button className='border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
          Employee
        </button>
      </a>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 dark:opacity-20">
        <img
          src="https://cdn.tailgrids.com/2.2/assets/application/images/contact/contact-11/grid-shape.svg"
          alt="grid-shape"
        />
      </div>
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-bold text-dark md:text-5xl dark:text-white">
            New Service
          </h2>
        </div>

        <div className="mx-auto w-full max-w-[540px]">
          <div className="-mx-4 flex flex-wrap">

            <div className="w-full px-4">
              <div className="mb-6">
                <label
                  htmlFor="service-name"
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  Service Name
                </label>
                <input
                  id="service-name"
                  type="text"
                  placeholder="Service Name"
                  className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            
            <div className="w-full px-4">
              <div className="mb-6">
                <label
                  htmlFor="service-category"
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  Service Category
                </label>
                <select
                  id="service-category"
                  className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                >
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="design">Design</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-6">
                <label
                  htmlFor="price"
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  placeholder="$$"
                  className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            
            <div className="w-full px-4">
              <button className="flex h-12 w-full items-center justify-center rounded-lg bg-dark px-5 py-3 text-base font-medium text-white duration-200 hover:bg-dark/90 dark:bg-white dark:text-dark dark:hover:bg-white/90">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
