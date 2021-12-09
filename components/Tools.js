import SearchForm from './SearchForm';
import Link from 'next/link';
import { useState } from 'react';
function Tools() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white flex space-x-10">
      {/* large screen search */}
      <div className="hidden md:w-1/2 md:block">
        <SearchForm />
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex justify-between">
          <div className="md:hidden">
            <Link href="/policy">
              <a className="flex justify-center items-center w-10 h-10 rounded-xl bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-8 w-8 text-sky-400"
                >
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
              </a>
            </Link>
          </div>
          {/* large screen links */}
          <div className="h-10 hidden md:flex items-center space-x-6 font-semibold">
            <Link href="/policy">
              <a href="#" className="text-gray-dark hover:text-sky-600">
                Feedback
              </a>
            </Link>
            <Link href="/policy">
              <a href="#" className="text-gray-dark hover:text-sky-600">
                Contacts
              </a>
            </Link>
            <Link href="/policy">
              <a href="#" className="text-gray-dark hover:text-sky-600">
                Help
              </a>
            </Link>
          </div>
          <div class="flex items-center space-x-4">
            {/* alert bell */}
            <Link href="/policy">
              <a className="flex items-center justify-center w-10 h-10 text-sky-400 hover:text-gray-700 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>

                <div className="w-2 h-2 bg-red-primary rounded-full absolute top-2 right-2 border border-white"></div>
              </a>
            </Link>
            <div className="md:relative">
              {/* profile button */}
              <button
                onClick={() => {
                  setOpen(!open);
                }}
                className="w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 focus:ring-offset-white"
              >
                <img
                  src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
                  alt=""
                  className="w-10 h-10 object-cover"
                />
              </button>
              {/* dropdown menu */}
              <div
                className={`absolute right-0 z-40 mt-2 w-full md:w-48 bg-white ${
                  open ? 'display' : 'hidden'
                }`}
              >
                <div className="bg-white mx-4 md:mx-0 rounded-md shadow-lg py-1 ring-1 ring-white ring-opacity-5">
                  <div className="md:hidden p-3">
                    <SearchForm />
                  </div>
                  {/* mobile links */}
                  <div className="md:hidden border-b border-gray-light">
                    <Link href="/policy">
                      <a className="block px-4 py-2 text-sm text-gray-dark hover:bg-blue-light">
                        Feedback
                      </a>
                    </Link>
                    <Link href="/policy">
                      <a className="block px-4 py-2 text-sm text-gray-dark hover:bg-blue-light">
                        Contacts
                      </a>
                    </Link>
                    <Link href="/policy">
                      <a className="block px-4 py-2 text-sm text-gray-dark hover:bg-blue-light">
                        Help
                      </a>
                    </Link>
                  </div>
                  {/* large screen links */}
                  <Link href="/policy">
                    <a className="block px-4 py-2 text-sm text-gray-dark hover:bg-blue-light">
                      Profile
                    </a>
                  </Link>
                  <Link href="/policy">
                    <a className="block px-4 py-2 text-sm text-gray-dark hover:bg-blue-light">
                      Settings
                    </a>
                  </Link>
                  <Link href="/policy">
                    <a className="block px-4 py-2 text-sm text-gray-dark hover:bg-blue-light">
                      Logout
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
