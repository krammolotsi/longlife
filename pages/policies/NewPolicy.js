import { Fragment } from 'react';
import NewPolicyForm from '../../components/NewPolicyForm';
function NewPolicy() {
  function addNewPolicyHandler(enteredPolicyData) {
    console.log(enteredPolicyData);
  }

  return (
    <Fragment>
      <div>
        <NewPolicyForm onAddPolicy={addNewPolicyHandler} />
      </div>
    </Fragment>
  );
}

export default NewPolicy;
