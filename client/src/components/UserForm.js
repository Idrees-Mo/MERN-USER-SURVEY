import React, { useState } from 'react'

const UserForm = () => {
  const [step, setStep] = useState(1)
  console.log(step)
  return (
    <div>
      <h1>steps</h1>
      {step === 1 ? <h1>step1</h1> : step === 2 ? <h1>step2</h1> : <h1>last step</h1>}
      <button onClick={() => setStep(pre => step + 1)}>next</button>
      {step >= 2 && step <= 2 &&
        <button onClick={() => setStep(pre => step - 1)}>previous</button>
      }   </div>
  )
}

export default UserForm
