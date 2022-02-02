import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/Layout';
function PolicyPage() {
  //get access to router object containing values from the url
  const router = useRouter();

  const policyID = router.query.policyId;
  console.log(policyID);
  return (
    <div className="h-screen">
      <Head>
        <title>Long Life Funeral</title>
        <link rel="icon" href="/longlifelogo.png" />
      </Head>
      <Layout children={<div>i am policy holder page not form</div>} />
    </div>
  );
}

export default PolicyPage;
