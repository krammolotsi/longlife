import { useRouter } from 'next/router';

function PolicyPage() {
  //get access to router object containing values from the url
  const router = useRouter();

  const policyID = router.query.policyId;
  console.log(policyID);
  return <div>i am policy page</div>;
}

export default PolicyPage;
