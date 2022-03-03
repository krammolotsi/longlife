import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { queryPaidPremiums } from './QueryFirestore';

function CalculateOutstandingPremiums() {
  var newDate = new Date();
  var currentMonth = newDate.getMonth() + 1;
  //check oustanding premiums
  const [infoSliderOutstandingPremium, setInfoSliderOutstandingPremium] =
    useState();
  //check paid premiums
  const [payments, setPayments] = useState([]);
  var sum = 0;

  var sumOfOutstandingPremiums = 0;
  const queryOutstandingPremiums = query(collection(db, 'clients'));
  async function getOutstandingPremiums() {
    const outstandingPremiums = [];
    const outstandingPremiumTotal = [];

    const querySnapshotOutstandingPremiums = await getDocs(
      queryOutstandingPremiums
    );
    querySnapshotOutstandingPremiums.forEach((doc) => {
      outstandingPremiums.push(doc.data());
    });
    outstandingPremiums.forEach((doc) => {
      outstandingPremiumTotal.push(doc.premium);
    });

    var intOutstandingPremiums;
    for (let i = 0; i < outstandingPremiumTotal.length; i++) {
      intOutstandingPremiums = outstandingPremiumTotal[i];
      sumOfOutstandingPremiums += parseInt(intOutstandingPremiums);
    }
    //get all premiums
    const paymentCollection = [];
    const paymentTotal = [];
    const querySnapshot = await getDocs(queryPaidPremiums);
    querySnapshot.forEach((doc) => {
      paymentCollection.push(doc.data());
    });

    paymentCollection.forEach((doc) => {
      paymentTotal.push(doc.paymentAmount);
      // const sum = paymentTotal.reduce((partialSum, a) => partialSum + a, 0);
    });

    var int;
    for (let i = 0; i < paymentTotal.length; i++) {
      int = paymentTotal[i];
      sum += parseInt(int);
    }
    //calculate total
    setInfoSliderOutstandingPremium(sumOfOutstandingPremiums * 2 - sum);
  }
  useEffect(() => {
    getOutstandingPremiums();
  }, []);
  return <Fragment>R{infoSliderOutstandingPremium}</Fragment>;
}

export default CalculateOutstandingPremiums;
