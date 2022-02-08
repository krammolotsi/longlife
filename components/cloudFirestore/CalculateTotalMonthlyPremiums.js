import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { queryPaidPremiums } from './QueryFirestore';
function CalculateTotalMonthlyPremiums() {
  //calculates total premiums paid for the month and displays in toolbar
  var newDate = new Date();
  var currentMonth = newDate.getMonth() + 1;

  const [infoSliderPremium, setInfoSliderPremium] = useState();
  var sum = 0;

  async function getPayments() {
    const paymentCollection = [];
    const paymentTotal = [];
    const querySnapshot = await getDocs(queryPaidPremiums);
    querySnapshot.forEach((doc) => {
      paymentCollection.push(doc.data());
    });

    paymentCollection.forEach((doc) => {
      paymentTotal.push(doc.paymentAmount);
    });

    var int;
    for (let i = 0; i < paymentTotal.length; i++) {
      int = paymentTotal[i];
      sum += parseInt(int);
    }

    setInfoSliderPremium(sum);
  }
  useEffect(() => {
    getPayments();
  }, []);

  return <Fragment>R{infoSliderPremium}</Fragment>;
}

export default CalculateTotalMonthlyPremiums;
