import Link from 'next/link';
import MainNav from './MainNav';
import Tools from './Tools';
function Layout() {
  return (
    <div className="flex h-full bg-sky-400 relative">
      {/* side nav section */}
      <div className="fixed bottom-0 w-full h-22 md:w-24 md:h-full md:static z-10 bg-red-primary">
        <div className="w-full md:w-24 h-22 md:h-full bg-sky-400 relative">
          <Link href="/policy">
            <a className="hidden md:absolute md:flex md:justify-center md:items-center md:top-10 md:left-1/2 md:transform md:-translate-x-1/2  md:w-14 md:h-14 bg-sky-400 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8 text-white"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            </a>
          </Link>
          <MainNav />
        </div>
      </div>
      {/* dashboard */}
      <div className="w-full p-4 space-y-3 md:p-10 h-full bg-white md:rounded-l-3xl">
        {/* top navbar */}
        <Tools />
        {/* info slider */}
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
                  Visitorz
                </span>
                <span className="font-semibold text-xl md:text-2xl">
                  10,320
                </span>
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
                  Visitors
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
                  Visitors
                </span>
                <span className="font-semibold text-xl md:text-2xl">
                  10,320
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* main section */}
        <div className="bg-gray-dark rounded-xl h-52 w-full flex-shrink-0 lg:flex-shrink">
          main section
        </div>
      </div>
    </div>
  );
}

export default Layout;
