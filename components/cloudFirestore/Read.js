import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState, useEffect } from 'react';
import ClientProfile from '../ClientProfile';

export default function ReadToCloudFirestore(props) {
  //read from database
  const [clients, setClients] = useState([]);
  const q = query(
    collection(db, 'clients'),
    where('IdNumber', '==', props.IdNumber)
  );

  //query
  async function getClients() {
    const clientCollection = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      clientCollection.push(doc.data());
      // console.log('info below');
      // console.log(doc.id, ' => ', doc.data());
    });
    setClients(clientCollection);
  }

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className="w-full h-full bg-white grid grid-cols-1 md:grid-cols-4 overflow-auto flex-shrink-0 md:p-2 md:flex-shrink">
      {clients.map((policyHolder) => (
        <ClientProfile
          key={policyHolder.policyNumber}
          id={policyHolder.id}
          fullName={policyHolder.fullName}
          IdNumber={policyHolder.IdNumber}
          inception={policyHolder.inception}
          premium={policyHolder.premium}
          policyNumber={policyHolder.policyNumber}
          cover={policyHolder.cover}
        />
      ))}
    </div>
  );
}
