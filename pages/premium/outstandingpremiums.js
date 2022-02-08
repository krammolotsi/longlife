import Head from 'next/head';
import Layout from '../../components/Layout';
import InfoSlider from '../../components/InfoSlider';
import CalculateOutstandingPremiums from '../../components/cloudFirestore/CalculateOutstandingPremiums';

function OutstandingPremiums() {
  return (
    <div className="h-screen">
      <Head>
        <title>Long Life Funeral</title>
        <link rel="icon" href="/longlifelogo.png" />
      </Head>
      <Layout
        children={<CalculateOutstandingPremiums />}
        infoSlider={<InfoSlider />}
      />
    </div>
  );
}

export default OutstandingPremiums;
