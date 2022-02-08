import { useState } from 'react';
function PremiumPayment(props) {
  const [idNumber, setIdNumber] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const isInvalid = idNumber === '' || paymentAmount === '';
  //submit from form
  function submitHandler(event) {
    event.preventDefault();
    var newDate = new Date();
    var currentMonth = newDate.getMonth() + 1;
    var currentDay = newDate.getDay();
    var currentYear = newDate.getFullYear();
    try {
      const policyData = {
        IdNumber: idNumber,
        paymentDay: currentDay,
        paymentMonth: currentMonth,
        paymentYear: currentYear,
        paymentAmount: paymentAmount,
      };
      alert('Payment added');
      setIdNumber(0);
      setPaymentAmount(0);
    } catch (error) {
      setIdNumber(0);
      setPaymentAmount(0);
      setError(error.message);
    }
    props.onAddPremiumPayment(policyData);
  }
  return (
    <div className="font-sans overflow-hidden w-full">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-800 pt-12 md:pt-8">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-sky-400 shadow-lg  w-full h-full rounded-3xl absolute animate-rotate"></div>
          <div className="card bg-orange-primary shadow-lg  w-full h-full rounded-3xl absolute  animate-rotate_neg"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-light shadow-md">
            <label
              for=""
              className="block mt-3 text-sm text-gray-800 text-center font-semibold"
            >
              Pay Premium
            </label>
            <form onSubmit={submitHandler} method="POST" className="mt-10">
              <div className="mt-7">
                <label
                  for=""
                  className="block mt-3 text-sm text-orange-primary text-center font-semibold"
                >
                  ID Number
                </label>
                <input
                  type="number"
                  placeholder="ID number"
                  className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                  onChange={({ target }) => setIdNumber(target.value)}
                  value={idNumber}
                />
              </div>
              <div className="mt-7">
                <label
                  for=""
                  className="block mt-3 text-sm text-orange-primary text-center font-semibold"
                >
                  Payment Amounts
                </label>
                <input
                  type="number"
                  placeholder="Payment Amount"
                  className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                  onChange={({ target }) => setPaymentAmount(target.value)}
                  value={paymentAmount}
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
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumPayment;
