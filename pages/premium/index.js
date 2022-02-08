import React from 'react';
import { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import InfoSlider from '../../components/InfoSlider';
import PremiumPayment from '../../components/PremiumPayment';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
function Premiums() {
  function addNewPremiumPaymentHandler(enteredPolicyData) {
    const sendData = async () => {
      try {
        const docRef = await addDoc(
          collection(db, 'premiums'),
          enteredPolicyData
        );
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    };
    sendData();
  }
  return (
    <div className="h-screen">
      <Head>
        <title>Long Life Funeral</title>
        <link rel="icon" href="/longlifelogo.png" />
      </Head>
      <Layout
        children={
          <PremiumPayment onAddPremiumPayment={addNewPremiumPaymentHandler} />
        }
        infoSlider={<InfoSlider />}
      />
    </div>
  );
}

export default Premiums;
