import { Fragment } from 'react';
import Link from 'next/link';

function Policies() {
  return (
    <Fragment>
      <h1>This is a new page that will display all policies</h1>
      <ul>
        <li>
          <Link href="/policies/hey">Policy holder</Link>
        </li>
        <li>
          <Link href="/policies/NewPolicy">New policy</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default Policies;
