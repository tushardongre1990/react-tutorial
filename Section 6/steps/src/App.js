import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  return (
    <div>
      <Step />
      {/* <Step /> */}
    </div>
  );
};

const Step = () => {
  /*
  useSate Steps
  1. create 
  2. use
  3. update
  */
  const [step, setStep] = useState(1); // step 1 : Create
  const [isOpen, setIsOpen] = useState(true);

  // use returns an array whose 1st element is the default value of the state and 2nd element i the function which updates the default value
  function handlePrevious() {
    if (step > 1) {
      // setStep(step - 1); // step 3 : update

      // when we update state based on current state, use callback func
      setStep((s) => s - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      // setStep(step + 1); // step 3 : update
      // when we update state based on current state, use callback func
      setStep((s) => s + 1);
    }
  }

  function handleClose() {
    // setIsOpen(!isOpen);
    setIsOpen((is) => !is);
  }

  return (
    <div>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          {/* step 2 : Use */}
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          {/* <p className="message">
            <h3>Step {step}</h3> {messages[step - 1]}
          </p> */}

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>👉</span>
            </Button>

            {/* <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => alert("Next")} // don't directly call the alert func, call callback func i.e callback func is called when button is clicked
        >
          Next
        </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

const StepMessage = ({ step, children }) => {
  return (
    <div className="message">
      <h3>Step {step}</h3> {children}
    </div>
  );
};

const Button = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default App;
