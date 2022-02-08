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
            <span className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
              ID Number:
            </span>
            <br />
            {props.IdNumber}
          </p>
          <p className="leading-normal truncate text-gray-dark">
            <span className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
              Inception:
            </span>
            <br />
            {props.inception}
          </p>
          <p className="leading-normal truncate text-gray-dark">
            <span className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
              Policy Number:
            </span>
            <br />
            {props.policyNumber}
          </p>
          <p className="leading-normal truncate text-gray-dark">
            <span className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
              Premium:
            </span>
            <br />
            {props.premium}
          </p>
          <p className="leading-normal truncate text-gray-dark">
            <span className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
              Cover:
            </span>
            <br />
            {props.cover}
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default ClientProfile;
