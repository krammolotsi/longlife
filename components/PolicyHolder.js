import { PlusCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { Fragment } from 'react';
function PolicyHolder(props) {
  return (
    <Fragment>
      <div className="max-w-xs mx-4 space-x-1 space-y-1 m-2 mb-2 rounded-lg shadow-lg bg-gray-light">
        <div className="px-6 py-4">
          <h4 className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
            {props.name}
          </h4>
          <p className="leading-normal truncate text-gray-dark">
            {props.address}
          </p>
          <p className="leading-normal truncate text-gray-dark">
            {props.premium}
          </p>
          <p className="leading-normal truncate text-gray-dark">
            {props.idNum}
          </p>
        </div>
        <div className="block bg-gray-light text-center p-2">
          <Link href="/policies/hey">
            <button
              type="suubmit"
              className="bg-sky-400 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out hover:bg-orange-primary transform hover:-translate-x hover:scale-105"
            >
              More Info
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default PolicyHolder;
