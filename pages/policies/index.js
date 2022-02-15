import { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import InfoSlider from '../../components/InfoSlider';
import PolicyList from '../../components/PolicyList';

function Policies() {
  return (
    <div className="h-screen">
      <Head>
        <title>Long Life Funeral</title>
        <link rel="icon" href="/longlifelogo.png" />
      </Head>
      <Layout children={<PolicyList />} infoSlider={<InfoSlider />} />

      {/* business progress for the monthly */}

      {/* last added shuping */}
    </div>
  );
}

export default Policies;
