import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { queryPaidPremiums } from './QueryFirestore';
function CalculatePreviousMonth() {
  //calculates total premiums paid for the month and displays in toolbar
  var newDate = new Date();
  var currentMonth = newDate.getMonth() + 0;

  const [infoSliderPremium, setInfoSliderPremium] = useState();
  var sum = 0;
  const q = query(
    collection(db, 'premiums'),
    where('paymentMonth', '==', parseInt(currentMonth))
  );
  async function getPayments() {
    const paymentCollection = [];
    const paymentTotal = [];
    const querySnapshot = await getDocs(q);
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
    console.log(sum);
  }
  useEffect(() => {
    getPayments();
  }, []);

  return <Fragment>R{infoSliderPremium}</Fragment>;
}

export default CalculatePreviousMonth;
