import Head from 'next/head';
import InfoSlider from '../components/InfoSlider';
// import Image from 'next/image';
import Layout from '../components/Layout';
import PolicyList from '../components/PolicyList';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Home() {
  const stateCheck = true;

  return (
    <div className="h-screen">
      <Head>
        <title>Long Life Funeral</title>
        <link rel="icon" href="/longlifelogo.png" />
      </Head>
      <Layout children={<PolicyList />} infoSlider={<InfoSlider />} />
      {/* business progress for the monthly */}

      {/* polices added */}
    </div>
  );
}
