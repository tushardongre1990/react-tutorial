import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  /*
  useSate Steps
  1. create 
  2. use
  3. update
  */
  const [step, setStep] = useState(1); // step 1 : Create

  // use returns an array whose 1st element is the default value of the state and 2nd element i the function which updates the default value
  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1); // step 3 : update
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep(step + 1); // step 3 : update
    }
  }

  return (
    <div className="steps">
      {/* step 2 : Use */}
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
          // onClick={() => handleNext()} // can also written this way, but is redundant
        >
          Next
        </button>
        {/* <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => alert("Next")} // don't directly call the alert func, call callback func i.e callback func is called when button is clicked
        >
          Next
        </button> */}
      </div>
    </div>
  );
};

export default App;
