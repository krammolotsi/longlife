import Head from 'next/head';
import InfoSlider from '../components/InfoSlider';
import Layout from '../components/Layout';
import PolicyList from '../components/PolicyList';

export default function Home() {
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
