const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  function handlePrevious() {
    alert("Previous");
  }
  function handleNext() {
    alert("Next");
  }
  const step = 2;

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
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
