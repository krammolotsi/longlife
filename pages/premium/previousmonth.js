import Head from 'next/head';
import Layout from '../../components/Layout';
import InfoSlider from '../../components/InfoSlider';
import ReadMonthlyPremiums from '../../components/cloudFirestore/ReadMonthlyPremiums';
function PreviousMonth() {
  var newDate = new Date();
  var currentMonth = newDate.getMonth() + 1;
  var day = newDate.getDay();
  var currentYear = newDate.getFullYear();
  console.log(currentMonth);
  return (
    <div className="h-screen">
      <Head>
        <title>Long Life Funeral</title>
        <link rel="icon" href="/longlifelogo.png" />
      </Head>
      <Layout
        children={<ReadMonthlyPremiums number="0" />}
        infoSlider={<InfoSlider />}
      />
    </div>
  );
}

export default PreviousMonth;
