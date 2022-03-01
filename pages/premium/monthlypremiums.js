import Link from 'next/link';

import Head from 'next/head';
import Layout from '../../components/Layout';
import InfoSlider from '../../components/InfoSlider';
import ReadMonthlyPremiums from '../../components/cloudFirestore/ReadMonthlyPremiums';
function MonthlyPayments() {
  return (
    <div className="h-screen">
      <Head>
        <title>Long Life Funeral</title>
        <link rel="icon" href="/longlifelogo.png" />
      </Head>
      <Layout
        children={<ReadMonthlyPremiums number="1" />}
        infoSlider={<InfoSlider />}
      />
    </div>
  );
}

export default MonthlyPayments;
