import SearchForm from './SearchForm';
import Link from 'next/link';
function Tools() {
  return (
    <div className="bg-gray-primary rounded-xl h-14 flex-shrink-0 md:flex-shrink md:space-x-10">
      <div className="w-1/2 md:w-1/2 md:block">
        <SearchForm />
      </div>
      <div className="w-1/2 md:w-1/2">
        <div className="flex justify-between">
          <div className="md:hidden">
            <Link href="/policy">
              <a className="flex justify-center items-center w-10 h-10 rounded-xl bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-8 w-8 text-blue-800"
                >
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
              </a>
            </Link>
          </div>

          <div className="h-10 hidden md:flex items-center space-x-6 font-semibold">
            <Link href="/policy">
              <a href="#" className="text-gray-dark hover:text-blue-dark">
                Feedback
              </a>
            </Link>
            <Link href="/policy">
              <a href="#" className="text-gray-dark hover:text-blue-dark">
                Contacts
              </a>
            </Link>
            <Link href="/policy">
              <a href="#" className="text-gray-dark hover:text-blue-dark">
                Help
              </a>
            </Link>
          </div>
          <div class="flex items-center space-x-4">
            <Link href="/policy">
              <a className="flex items-center justify-center w-10 h-10 text-blue-primary hover:text-gray-700 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>

                <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-2 border border-white"></div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
