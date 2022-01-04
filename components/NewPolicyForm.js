import { useState } from 'react';
function NewPolicyForm(props) {
  const [fullName, setfullName] = useState('');
  const [idNum, setidNum] = useState('');
  const [contact, setcontact] = useState('');
  const [address, setaddress] = useState('');
  const [premium, setpremium] = useState('');

  const isInvalid =
    fullName === '' ||
    idNum === '' ||
    contact === '' ||
    address === '' ||
    premium === '';

  function submitHandler(event) {
    event.preventDefault();
    try {
      const policyData = {
        fullName: fullName,
        contact: contact,
        IdNum: idNum,
        address: address,
        premium: premium,
      };
      //await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      //history.push(ROUTES.HOME);
    } catch (error) {
      setfullName('');
      setidNum('');
      setcontact('');
      setaddress('');
      setpremium('');
      setError(error.message);
    }

    props.onAddPolicy(policyData);
  }
  return (
    <div className="font-sans overflow-hidden">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-sky-400 shadow-lg  w-full h-full rounded-3xl absolute animate-rotate"></div>
          <div className="card bg-orange-primary shadow-lg  w-full h-full rounded-3xl absolute  animate-rotate_neg"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-light shadow-md">
            <label
              for=""
              className="block mt-3 text-sm text-gray-700 text-center font-semibold"
            >
              Register
            </label>
            <form onSubmit={submitHandler} method="POST" className="mt-10">
              <div className="mt-7">
                <input
                  type="text"
                  placeholder="Full name"
                  className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                  onChange={({ target }) => setfullName(target.value)}
                  value={fullName}
                />
              </div>

              <div className="mt-7">
                <input
                  type="number"
                  placeholder="ID number"
                  className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                  onChange={({ target }) => setidNum(target.value)}
                  value={idNum}
                />
              </div>
              <div className="mt-7">
                <input
                  type="text"
                  placeholder="Contact number"
                  className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                  onChange={({ target }) => setcontact(target.value)}
                  value={contact}
                />
              </div>
              <div className="mt-7">
                <input
                  type="text"
                  placeholder="Address"
                  className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                  onChange={({ target }) => setaddress(target.value)}
                  value={address}
                />
              </div>
              <div className="mt-7">
                <input
                  type="text"
                  placeholder="Preium"
                  className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                  onChange={({ target }) => setpremium(target.value)}
                  value={premium}
                />
              </div>
              <div className="mt-7">
                <button
                  disabled={isInvalid}
                  type="submit"
                  className={`bg-blue-primary w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105  ${
                    isInvalid && 'opacity-50'
                  }`}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPolicyForm;
