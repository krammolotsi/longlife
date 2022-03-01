import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState, useEffect } from 'react';
import Payments from '../Payments';
function ReadMonthlyPremiums(props) {
  var newDate = new Date();
  var currentMonth = newDate.getMonth() + parseInt(props.number);
  const [payments, setPayments] = useState([]);
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
    setPayments(paymentCollection);
  }
  useEffect(() => {
    getPayments();
  }, []);
  return (
    <div className="w-full h-full bg-white grid grid-cols-1 md:grid-cols-4 overflow-auto flex-shrink-0 md:p-2 md:flex-shrink">
      {payments.map((policyHolder) => (
        <Payments
          key={policyHolder.IdNumber}
          id={policyHolder.id}
          IdNumber={policyHolder.IdNumber}
          paymentAmount={policyHolder.paymentAmount}
        />
      ))}
    </div>
  );
}

export default ReadMonthlyPremiums;
