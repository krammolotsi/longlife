import React from 'react';
import { Fragment } from 'react';
import NewPolicyForm from '../../components/NewPolicyForm';
import Head from 'next/head';
import Layout from '../../components/Layout';
import InfoSlider from '../../components/InfoSlider';
import PolicyList from '../../components/PolicyList';
function Premiums() {
  function addNewPolicyHandler(enteredPolicyData) {
    console.log(enteredPolicyData);
  }
  return (
    <div className="h-screen">
      <Head>
        <title>Long Life Funeral</title>
        <link rel="icon" href="/longlifelogo.png" />
      </Head>
      <Layout
        children={
          <>
            <a href="https://www.payfast.co.za/eng/process?cmd=_paynow&amp;receiver=19033454&amp;item_name=R150&amp;item_description=Testing&amp;amount=150.00&amp;return_url=http%3A%2F%2Fmalekanefoundation.org%2F&amp;cancel_url=http%3A%2F%2Fmalekanefoundation.org%2F">
              <img
                src="https://www.payfast.co.za/images/buttons/light-small-paynow.png"
                width="165"
                height="36"
                alt="Pay"
                title="Pay Now with PayFast"
              />
            </a>
          </>
        }
      />
    </div>
  );
}

export default Premiums;
