import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState, useEffect } from 'react';

export default function ReadToCloudFirestore() {
  const [clients, setClients] = useState([]);
  const clientsCollection = collection(db, 'clients');
  useEffect(() => {
    const getClients = async () => {
      const data = await getDocs(clientsCollection);
      console.log(data);
      setClients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getClients();
  }, []);

  return (
    <div>
      {clients.map((client) => {
        return (
          <div className="max-w-xs mx-4 space-x-1 space-y-1 m-2 mb-2 rounded-lg shadow-lg bg-gray-light">
            <div className="px-6 py-4">
              <h4 className="mb-3 text-xl truncate font-semibold tracking-tight text-gray-dark">
                {client.first}
              </h4>
              <p className="leading-normal truncate text-gray-dark">
                {client.last}
              </p>
              <p className="leading-normal truncate text-gray-dark">
                {client.born}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
