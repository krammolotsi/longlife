import { Fragment } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useState, useEffect } from 'react';
import PolicyHolder from './PolicyHolder';
function PolicyList() {
  //read from database
  const [clients, setClients] = useState([]);
  const clientsCollection = collection(db, 'clients');
  useEffect(() => {
    const getClients = async () => {
      const data = await getDocs(clientsCollection);
      // console.log(data);
      setClients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getClients();
  }, []);

  return (
    <div className="w-full h-full bg-white grid grid-cols-1 md:grid-cols-4 overflow-auto flex-shrink-0 md:p-2 md:flex-shrink">
      {clients.map((policyHolder) => (
        <PolicyHolder
          key={policyHolder.policyNumber}
          id={policyHolder.id}
          fullName={policyHolder.name + policyHolder.surname}
          IdNumber={policyHolder.idNumber}
          premium={policyHolder.premium}
          policyNumber={policyHolder.policyNumber}
        />
      ))}
    </div>
  );
}

export default PolicyList;
