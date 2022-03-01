import { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import InfoSlider from '../../components/InfoSlider';
import PolicyList from '../../components/PolicyList';
//import WriteToCloudFirestore from '../../components/cloudFirestore/Write';
function Policies() {
  return (
    <div className="h-screen">
      <Head>
        <title>Long Life Funeral</title>
        <link rel="icon" href="/longlifelogo.png" />
      </Head>
      <Layout children={<PolicyList />} infoSlider={<InfoSlider />} />
    </div>
  );
}

export default Policies;
