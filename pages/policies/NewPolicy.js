import { Fragment } from 'react';
import NewPolicyForm from '../../components/NewPolicyForm';
import Head from 'next/head';
import Layout from '../../components/Layout';
import InfoSlider from '../../components/InfoSlider';
import PolicyList from '../../components/PolicyList';
//onAddPolicy={addNewPolicyHandler}
function NewPolicy() {
  function addNewPolicyHandler(enteredPolicyData) {
    console.log(enteredPolicyData);
  }

  return (
    <div className="h-screen">
      <Head>
        <title>Long Life Funeral</title>
        <link rel="icon" href="/longlifelogo.png" />
      </Head>
      <Layout children={<NewPolicyForm onAddPolicy={addNewPolicyHandler} />} />
    </div>
  );
}

export default NewPolicy;
