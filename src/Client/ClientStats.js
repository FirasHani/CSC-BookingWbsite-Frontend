import React from "react";

const DataStats3 = () => {
  return (
    <section className="bg-gray-2 ">
          <a 
          href="/ClientNew" 
          className="inline-block" 
          rel="noopener noreferrer"
        >
        <button className='border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
        Create Client  
          </button>
        </a>
     
      <div className="mx-auto px-4 md:container">
        <div className="-mx-4 flex flex-wrap">
          <DataStatsCard
            total="$12,489"
            totalTitle="Total Balance"
            increment="0.43%"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8125 11.175H9.18748C7.34998 11.175 5.81248 9.74999 5.81248 7.98749C5.81248 6.22499 7.31248 4.79999 9.18748 4.79999H17.475C17.925 4.79999 18.3 4.42499 18.3 3.97499C18.3 3.52499 17.925 3.14999 17.475 3.14999H13.575V1.49999C13.575 1.04999 13.2 0.674988 12.75 0.674988C12.3 0.674988 11.925 1.04999 11.925 1.49999V3.07499H9.22498C6.44998 3.07499 4.16248 5.24999 4.16248 7.94999C4.16248 10.65 6.41248 12.825 9.22498 12.825H14.85C16.6875 12.825 18.225 14.25 18.225 16.0125C18.225 17.775 16.725 19.2 14.85 19.2H5.32498C4.87498 19.2 4.49998 19.575 4.49998 20.025C4.49998 20.475 4.87498 20.85 5.32498 20.85H11.8875V22.5C11.8875 22.95 12.2625 23.325 12.7125 23.325C13.1625 23.325 13.5375 22.95 13.5375 22.5V20.925H14.7375C17.5125 20.925 19.8 18.75 19.8 16.05C19.8 13.35 17.5875 11.175 14.8125 11.175Z"
                  fill="#3758F9"
                />
              </svg>
            }
          />
          <DataStatsCard
            total="$2,572"
            totalTitle="Total Sales"
            increment="0.39%"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.825 4.16251C21.375 3.60001 20.7375 3.30001 20.025 3.30001H6.97499L6.89999 1.87501C6.86249 1.20001 6.29999 0.637512 5.62499 0.637512H2.51249C2.06249 0.637512 1.64999 1.01251 1.64999 1.50001C1.64999 1.98751 2.02499 2.36251 2.51249 2.36251H5.24999L6.03749 15.4875C6.07499 16.425 6.86249 17.1375 7.76249 17.1375H20.0625C20.5125 17.1375 20.925 16.7625 20.925 16.275C20.925 15.7875 20.55 15.4125 20.0625 15.4125H7.76249C7.72499 15.4125 7.68749 15.375 7.68749 15.3375L7.53749 13.05H18.8625C19.95 13.05 20.8875 12.3 21.1125 11.25L22.2375 6.07501C22.425 5.43751 22.2375 4.72501 21.825 4.16251ZM20.625 5.73751L19.5 10.9125C19.425 11.175 19.2 11.4 18.9 11.4H7.46249L7.08749 4.98751H20.025C20.2875 4.98751 20.4375 5.13751 20.5125 5.21251C20.55 5.32501 20.6625 5.51251 20.625 5.73751Z"
                  fill="#3758F9"
                />
                <path
                  d="M17.4375 18C15.975 18 14.775 19.2 14.775 20.6625C14.775 22.125 15.975 23.325 17.4375 23.325C18.9 23.325 20.1 22.125 20.1 20.6625C20.1 19.2 18.9375 18 17.4375 18ZM17.4375 21.675C16.9125 21.675 16.4625 21.225 16.4625 20.7C16.4625 20.175 16.9125 19.725 17.4375 19.725C17.9625 19.725 18.4125 20.175 18.4125 20.7C18.4125 21.225 18 21.675 17.4375 21.675Z"
                  fill="#3758F9"
                />
                <path
                  d="M9.18749 18C7.72499 18 6.52499 19.2 6.52499 20.6625C6.52499 22.125 7.72499 23.325 9.18749 23.325C10.65 23.325 11.85 22.125 11.85 20.6625C11.85 19.2 10.65 18 9.18749 18ZM9.18749 21.675C8.66249 21.675 8.21249 21.225 8.21249 20.7C8.21249 20.175 8.66249 19.725 9.18749 19.725C9.71249 19.725 10.1625 20.175 10.1625 20.7C10.1625 21.225 9.71249 21.675 9.18749 21.675Z"
                  fill="#3758F9"
                />
              </svg>
            }
          />
          <DataStatsCard
            total="582"
            totalTitle="Total Customers"
            decrement="0.23%"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.45 12.75C17.325 11.4 15.9 10.4625 14.325 9.97498C15.9 9.14998 16.95 7.49998 16.95 5.58748C16.95 2.84998 14.7375 0.599976 11.9625 0.599976C9.1875 0.599976 7.0125 2.88748 7.0125 5.62498C7.0125 7.49998 8.0625 9.14998 9.6375 10.0125C8.0625 10.5 6.675 11.4375 5.5125 12.7875C3.8625 14.7375 2.925 17.4375 2.8875 20.4C2.8875 20.7375 3.075 21.0375 3.3375 21.15C4.35 21.675 8.025 23.325 11.9625 23.325C16.2375 23.325 19.65 21.6375 20.625 21.1125C20.8875 20.9625 21.075 20.6625 21.075 20.3625C21.0375 17.4375 20.1 14.7375 18.45 12.75ZM12 2.36248C13.8 2.36248 15.3 3.82498 15.3 5.66248C15.3 7.49998 13.8375 8.96247 12 8.96247C10.1625 8.96247 8.7 7.49998 8.7 5.66248C8.7 3.82498 10.2 2.36248 12 2.36248ZM12 21.675C8.8875 21.675 5.85 20.475 4.6125 19.875C4.7625 17.5125 5.5125 15.4125 6.825 13.8375C8.175 12.225 10.0125 11.325 12 11.325C13.9875 11.325 15.825 12.225 17.175 13.8375C18.4875 15.375 19.275 17.5125 19.3875 19.875C18.225 20.475 15.375 21.675 12 21.675Z"
                  fill="#3758F9"
                />
              </svg>
            }
          />

        </div>
      </div>
    </section>
  );
};

export default DataStats3;



const DataStatsCard = ({ icon, totalTitle, total, increment, decrement }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
      <div className="mb-8 rounded-lg border border-stroke bg-white p-6 lg:px-4 xl:px-6">
        <div className="mb-[18px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary/[0.06] text-primary ">
          {icon}
        </div>
        <div className="flex items-end justify-between">
          <div>
            <span className="mb-1 block text-2xl font-bold leading-none text-dark lg:text-xl xl:text-2xl">
              {total}
            </span>
            <span className="text-sm text-body-color ">
              {totalTitle}
            </span>
          </div>
          <div>
            <p
              className={`inline-flex items-center text-sm font-medium ${
                increment ? "text-green" : "text-red"
              }`}
            >
              {increment}
              {decrement}
              <span className="pl-1">
                {increment && (
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.35716 2.8925L0.908974 6.245L5.0443e-07 5.36125L5 0.499999L10 5.36125L9.09103 6.245L5.64284 2.8925L5.64284 10.5L4.35716 10.5L4.35716 2.8925Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                {decrement && (
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64284 8.1075L9.09102 4.755L10 5.63875L5 10.5L-8.98488e-07 5.63875L0.908973 4.755L4.35716 8.1075L4.35716 0.500001L5.64284 0.500001L5.64284 8.1075Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};