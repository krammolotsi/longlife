import React from 'react';
import { Fragment } from 'react';
function ClientProfile(props) {
  return (
    <Fragment>
      <div className="max-w-xs mx-4 space-x-1 space-y-1 m-2 mb-2 rounded-lg shadow-lg bg-gray-light">
        <div className="px-6 py-4">
          <h3 className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
            {props.fullName}
          </h3>
          <p className="leading-normal truncate text-gray-dark">
            <h3 className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
              ID Num:
            </h3>
            {props.IdNumber}
          </p>
          <p className="leading-normal truncate text-gray-dark">
            <h3 className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
              Inception:
            </h3>
            {props.inception}
          </p>
          <p className="leading-normal truncate text-gray-dark">
            <h3 className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
              Policy Num:
            </h3>
            {props.policyNumber}
          </p>
          <p className="leading-normal truncate text-gray-dark">
            <h3 className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
              Premium:
            </h3>
            {props.premium}
          </p>
          <p className="leading-normal truncate text-gray-dark">
            <h3 className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
              Cover:
            </h3>
            {props.cover}
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default ClientProfile;
