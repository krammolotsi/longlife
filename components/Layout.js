import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/longlifelogo.png';
import { Fragment } from 'react';
import InfoSlider from './InfoSlider';
import MainNav from './MainNav';
import Tools from './Tools';
import { signIn, useSession } from 'next-auth/react';
import Landing from './Landing';
function Layout(props) {
  const { data: session } = useSession();

  console.log(session);
  return (
    <>
      {session ? (
        <div className="flex h-full bg-sky-400 relative">
          {/* side nav section */}
          <div className="fixed bottom-0 w-full h-22 md:w-24 md:h-full md:static z-10 bg-orange-primary">
            <div className="w-full md:w-24 h-22 md:h-full bg-sky-400 relative">
              <Link href="/policies">
                <a className="hidden md:absolute md:flex md:justify-center md:items-center md:top-10 md:left-1/2 md:transform md:-translate-x-1/2  md:w-16 md:h-16 bg-sky-400 rounded-xl">
                  <Image src={logo} layout="fill" objectFit="cover" />
                </a>
              </Link>
              <MainNav />
            </div>
          </div>
          {/* dashboard */}
          <div className="w-full p-4 space-y-3 md:p-10 h-full bg-white md:rounded-l-3xl overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-orange-primary">
            {/* top navbar */}
            <Tools session={session.user.image} />
            {/* info slider */}
            {props.infoSlider}
            {/* main section */}
            <div className="bg-white rounded-xl w-full flex flex-shrink-0 md:p-2 md:flex-shrink text-gray-dark overflow-hidden">
              {props.children}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Landing />
          {/* <button onClick={signIn}>LOGIN</button> */}
        </>
      )}
    </>
  );
}

export default Layout;
