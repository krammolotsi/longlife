import Link from 'next/link';
function MainNav() {
  return (
    <div className="flex md:flex-col items-center justify-center h-full space-x-4 md:space-x-0 md:space-x-0 md:space-y-4 py-4">
      <Link href="/policy">
        <a className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white text-sky-400 transform  md:translate-x-8 duration-300 shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
      </Link>
      <Link href="/policies">
        <a className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-xl text-white hover:bg-white hover:opacity-100 hover:text-sky-400 transform md:hover:translate-x-8 duration-300 hover:shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-6 w-6"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
        </a>
      </Link>
      <Link href="/policy">
        <a className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-xl text-white hover:bg-white hover:opacity-100 hover:text-sky-400 transform  md:hover:translate-x-8 duration-300 hover:shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-6 w-6"
          >
            <path
              fill-rule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </Link>
      <Link href="/policy">
        <a className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-xl text-white hover:bg-white hover:opacity-100 hover:text-sky-400 transform  md:hover:translate-x-8 duration-300 hover:shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-6 w-6"
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