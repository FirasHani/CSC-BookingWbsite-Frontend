import React from "react";

function Contact11() {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-16 md:py-20 lg:py-28">
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2">
        <img
          src="https://cdn.tailgrids.com/2.2/assets/application/images/contact/contact-11/grid-shape.svg"
          alt="grid-shape"
        />
      </div>
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-mid font-bold text-dark md:text-3xl">
          Client Details
          </h2>
        </div>

        <div className="mx-auto w-full max-w-[540px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2">
              <div className="mb-6">
                <label className="mb-2.5 block text-base font-medium text-dark">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2">
              <div className="mb-6">
                <label className="mb-2.5 block text-base font-medium text-dark">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                <label className="mb-2.5 block text-base font-medium text-dark">
                  Company name
                </label>
                <input
                  type="email"
                  placeholder="Company name"
                  className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                <label className="mb-2.5 block text-base font-medium text-dark">
                  Phone number
                </label>
                <input
                  type="text"
                  placeholder="+1 (555) 444-0000"
                  className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                <label className="mb-2.5 block text-base font-medium text-dark">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Type your message"
                  className="w-full rounded-lg border border-stroke bg-transparent p-5 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary"
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
            <button className='border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
            Enter
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact12() {
    return (
      
      <section className="relative z-10 overflow-hidden bg-white py-16 md:py-20 lg:py-28">

        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2">
          <img
            src="https://cdn.tailgrids.com/2.2/assets/application/images/contact/contact-11/grid-shape.svg"
            alt="grid-shape"
          />
        </div>
        <div className="container">
          <div className="mb-16 ">
            <h2 className="mb-3 text-mid font-bold text-dark md:text-3xl">
            Property Details
            </h2>
          
          </div>
  
          <div className="mx-auto w-full max-w-[540px]">
            <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
                <div className="mb-6">
                  <label className="mb-2.5 block text-base font-medium text-dark">
                  Property Details
                  </label>
                  <input
                    type="Street address"
                    placeholder="yourname@company.com"
                    className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary"
                  />
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="mb-6">
              
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary"
                  />
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="mb-6">
               
                  <input
                    type="text"
                    placeholder="State"
                    className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary"
                  />
                </div>
              </div>
        
              <div className="w-full px-4">
                <div className="mb-6">
            
                  <input
                    type="text"
                    placeholder="+1 (555) 444-0000"
                    className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary"
                  />
                </div>
              </div>
              <div className="w-full px-4">
              <div className="mb-6">
                  <label className="mb-2.5 block text-base font-medium text-dark">
                  Credit Card

                  </label>
                  <input
                    type="Street address"
                    placeholder="yourname@company.com"
                    className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary"
                  />
                </div>
              </div>
       
         
            </div>
          </div>
        </div>
      </section>
    );
  }
export default function ContactSection() {
  return (
    <>
              <a 
  href="/job" 
  className="inline-block" 

  rel="noopener noreferrer"
>
<button className='border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
Jobs  
</button>
</a>
        <div className="flex">
      
      <div className="w-1/2 pr-4">
        <Contact11 />
      </div>
      <div className="w-1/2 pl-4">
        <Contact12 />
      </div>
    </div>
    </>

  );
}
