import { Fragment } from 'react';
import PolicyHolder from './PolicyHolder';
function PolicyList() {
  //add database connection

  const policies = [
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '12345',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
  ];
  return (
    <div className="w-full h-full bg-white grid grid-cols-1 md:grid-cols-4 overflow-auto flex-shrink-0 md:p-2 md:flex-shrink">
      {policies.map((policyHolder) => (
        <PolicyHolder
          key={policyHolder.id}
          id={policyHolder.id}
          name={policyHolder.name}
          idNum={policyHolder.idNum}
          contact={policyHolder.contact}
          address={policyHolder.address}
          premium={policyHolder.premium}
        />
      ))}
    </div>
  );
}

export default PolicyList;
