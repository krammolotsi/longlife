import { Fragment } from 'react';
function Payments(props) {
  return (
    <Fragment>
      <div className="max-w-xs mx-4 space-x-1 space-y-1 m-2 mb-2 rounded-lg shadow-lg bg-gray-light">
        <div className="px-6 py-4">
          <p className="leading-normal truncate text-gray-dark">
            <span className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
              ID Number:
            </span>
            <br />
            {props.IdNumber}
          </p>

          <p className="leading-normal truncate text-gray-dark">
            <span className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
              Payment Amount:
            </span>
            <br />
            {props.paymentAmount}
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Payments;
