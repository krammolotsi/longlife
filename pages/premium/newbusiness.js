import Head from 'next/head';
import Layout from '../../components/Layout';
import InfoSlider from '../../components/InfoSlider';
function NewBusiness() {
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
        children={
          <div>
            <p>Day is {day}</p>
            <p>Month is {currentMonth}</p>
            <p>Year is {currentYear}</p>
          </div>
        }
        infoSlider={<InfoSlider />}
      />
    </div>
  );
}

export default NewBusiness;
