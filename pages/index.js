import Head from 'next/head';
import WriteToCloudFirestore from '../components/cloudFirestore/Write';
import ReadToCloudFirestore from '../components/cloudFirestore/Read';
import InfoSlider from '../components/InfoSlider';
// import Image from 'next/image';
import Layout from '../components/Layout';
import PolicyList from '../components/PolicyList';
import firebase from '../firebase';
//import { initFirebase } from '../firebase';

export default function Home() {
  // const stateCheck = true;
  return (
    <div className="h-screen">
      <Head>
        <title>Long Life Funeral</title>
        <link rel="icon" href="/longlifelogo.png" />
      </Head>
      <WriteToCloudFirestore />
      <ReadToCloudFirestore />
      {/* <Layout children={<PolicyList />} infoSlider={<InfoSlider />} /> */}
      {/* business progress for the monthly */}

      {/* polices added */}
    </div>
  );
}
