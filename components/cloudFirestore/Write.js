//import firebase from 'firebase/app';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
export default function WriteToCloudFirestore() {
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'clients'), {
        first: 'Micky Steve',
        last: 'Mouse',
        born: 1010,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div style={{ margin: '5px 0' }}>
      <button onClick={sendData} style={{ width: '100%' }}>
        Send Data To Cloud Firestore
      </button>
    </div>
  );
}
