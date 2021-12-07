import { useRouter } from 'next/router';
import { Fragment } from 'react';
import PolicyHolder from '../../components/PolicyHolder';
function PolicyPage() {
  //get access to router object containing values from the url
  const router = useRouter();

  const policyID = router.query.policyId;
  console.log(policyID);
  return (
    <Fragment>
      <div>i am policy page</div>
      <div>
        <PolicyHolder />
      </div>
    </Fragment>
  );
}

export default PolicyPage;
