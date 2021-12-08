import Link from 'next/link';
import MainNav from './MainNav';
import Tools from './Tools';
function Layout() {
  return (
    <div className="flex h-full bg-pink-primary">
      {/* side nav section */}
      <div className="fixed bottom-0 w-full h-22 md:w-24 md:h-full md:static z-10 bg-red-primary">
        <div className="w-full md:w-24 h-22 md:h-full bg-blue-primary relative">
          <Link href="/policy">
            <a className="hidden md:absolute md:flex md:justify-center md:items-center md:top-10 md:left-1/2 md:transform md:-translate-x-1/2  md:w-14 md:h-14 bg-green-primary rounded-xl">
              Menu
            </a>
          </Link>
          <MainNav />
        </div>
      </div>
      {/* dashboard */}
      <div className="w-full p-4 space-y-3 md:p-10 h-full bg-white">
        {/* top navbar */}
        <Tools />
        {/* info slider */}
        <div className="bg-gray-dark rounded-xl h-24 w-full flex-shrink-0 lg:flex-shrink">
          <div className="flex space-x-4 lg:space-x-10 p-2">
            <div className="bg-yellow-primary rounded-xl h-20 w-full">1</div>
            <div className="bg-yellow-primary rounded-xl h-20 w-full">2</div>
            <div className="bg-yellow-primary rounded-xl h-20 w-full">3</div>
          </div>
        </div>
        {/* main section */}
        <div className="bg-gray-dark rounded-xl h-auto w-full flex-shrink-0 lg:flex-shrink">
          main section
        </div>
      </div>
    </div>
  );
}

export default Layout;
