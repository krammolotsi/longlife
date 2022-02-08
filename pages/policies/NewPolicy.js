import { Fragment } from 'react';
import NewPolicyForm from '../../components/NewPolicyForm';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
//onAddPolicy={addNewPolicyHandler}
function NewPolicy() {
  function addNewPolicyHandler(enteredPolicyData) {
    //write to collection

    const sendData = async () => {
      try {
        const docRef = await addDoc(
          collection(db, 'clients'),
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
      <Layout children={<NewPolicyForm onAddPolicy={addNewPolicyHandler} />} />
    </div>
  );
}

export default NewPolicy;
