import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
  MenuIcon,
  HomeIcon,
  DocumentTextIcon,
} from '@heroicons/react/solid';
function Header() {
  return (
    <div className="shadow-sm border-b border-gray-background m-4 sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left  */}
        {/* big screen */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="/longlifelogo.png"
            layout="fill"
            alt="longlifelogo"
            objectFit="contain"
          />
        </div>
        {/* small screen */}
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="/LLFS.jpg"
            layout="fill"
            alt="longlifelogo"
            objectFit="contain"
          />
        </div>
        {/* middle-search */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-base " />
            </div>
            <input
              className="bg-gray-light block w-full pl-10 sm:text-sm border-gray-background rounded-md focus:ring-blue-primary focus:border-blue-primary "
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          <DocumentTextIcon className="navBtn" />
          <div className="relative navBtn">
            <BriefcaseIcon className="navBtn" />
            <div className="absolute -top-2 -right-3 text-xs w-5 h-5 bg-green-primary rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
