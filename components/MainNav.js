import Link from 'next/link';
function MainNav() {
  return (
    <div className="flex md:flex-col items-center justify-center h-full space-x-4 md:space-x-0 md:space-x-0 md:space-y-4 py-4">
      <Link href="/policies">
        <a className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-xl text-white hover:bg-white hover:opacity-100 hover:text-sky-400 transform md:hover:translate-x-8 duration-300 hover:shadow-xl focus:outline-none md:focus:translate-x-8 focus:bg-white focus:text-sky-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
      </Link>
      <Link href="/policies/newpolicy">
        <a className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-xl text-white hover:bg-white hover:opacity-100 hover:text-sky-400 transform md:hover:translate-x-8 duration-300 hover:shadow-xl focus:outline-none md:focus:translate-x-8 focus:bg-white focus:text-sky-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        </a>
      </Link>
      <Link href="/premium">
        <a className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-xl text-white hover:bg-white hover:opacity-100 hover:text-sky-400 transform md:hover:translate-x-8 duration-300 hover:shadow-xl focus:outline-none md:focus:translate-x-8 focus:bg-white focus:text-sky-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path
              fill-rule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}

export default MainNav;
