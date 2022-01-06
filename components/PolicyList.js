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
      id: '123456',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '123457',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '123458',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '123459',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '123450',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234511',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234512',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234513',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234514',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234515',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234516',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234517',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234518',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234519',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234520',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234521',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234522',
      name: 'Tom John',
      idNum: '1234567891012',
      contact: '0823456728',
      address: '15 Helly avenue, Frozes',
      premium: 'R190',
    },
    {
      id: '1234523',
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
