function InfoSlider() {
  return (
    <div className="bg-white rounded-xl w-full flex-shrink-0 md:flex-shrink ">
      {/*overflow-hidden add above*/}
      <div className="flex space-x-4 md:space-x-10 p-2">
        <div className="bg-white w-1/3 shadow-md border-gray-light rounded-xl flex flex-col md:flex-row items-center px-3 py-5 md:p-5 space-x-0 md:space-x-5">
          <div className="bg-white p-2 rounded-lg text-sky-400 w-full md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div>
            <span className="font-semibold block uppercase text-xs text-gray-dark tracking-wider">
              Monthly Payments
            </span>
            <span className="font-semibold text-xl md:text-2xl">47,650</span>
          </div>
        </div>
        <div className="bg-orange-primary w-1/3 shadow-md border-orange-primary rounded-xl flex flex-col md:flex-row items-center px-3 py-5 md:p-5 space-x-0 md:space-x-5">
          <div className="bg-orange-dark p-2 rounded-lg text-white w-full md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div>
            <span className="font-semibold block uppercase text-xs text-white tracking-wider">
              Outstanding Payments
            </span>
            <span className="font-semibold text-xl md:text-2xl text-white">
              10,320
            </span>
          </div>
        </div>
        <div className="bg-white w-1/3 shadow-md border-gray-light rounded-xl flex flex-col md:flex-row items-center px-3 py-5 md:p-5 space-x-0 md:space-x-5">
          <div className="bg-white p-2 rounded-lg text-sky-400 w-full md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div>
            <span className="font-semibold block uppercase text-xs text-gray-dark tracking-wider">
              New Business
            </span>
            <span className="font-semibold text-xl md:text-2xl">320</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSlider;
