import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/Layout';
import ReadToCloudFirestore from '../../components/cloudFirestore/Read';
import InfoSlider from '../../components/InfoSlider';
function PolicyPage() {
  //get access to router object containing values from the url
  const router = useRouter();

  const policyID = router.query.policyId;
  console.log('got key' + policyID);
  return (
    <div className="h-screen">
      <Head>
        <title>Long Life Funeral</title>
        <link rel="icon" href="/longlifelogo.png" />
      </Head>
      <Layout
        children={<ReadToCloudFirestore IdNumber={policyID} />}
        infoSlider={<InfoSlider />}
      />
    </div>
  );
}

export default PolicyPage;
