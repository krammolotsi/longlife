import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

var newDate = new Date();
var currentMonth = newDate.getMonth() + 1;

const queryPaidPremiums = query(
  collection(db, 'premiums'),
  where('paymentMonth', '==', parseInt(currentMonth))
);

export { queryPaidPremiums };
