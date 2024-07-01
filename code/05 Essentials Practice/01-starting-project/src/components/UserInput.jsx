import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestement: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(
      prevUserInput => {
        return {
          ...prevUserInput,
          [inputIdentifier]: newValue,
        };
      }
    );
  }

  return (
    <section id="user-input">
      <p>
        <label>Initial Investment</label>
        <input
          type="number"
          required
          value={userInput.initialInvestment}
          onChange={(userData) =>
            handleChange("initialInvestment", userData.target.value)
          }
        />
      </p>
      <p>
        <label>Annual Investment</label>
        <input
          type="number"
          required
          value={userInput.annualInvestement}
          onChange={(userData) =>
            handleChange("annualInvestement", userData.target.value)
          }
        />
      </p>
      <p>
        <label>Expected Return</label>
        <input
          type="number"
          required
          value={userInput.expectedReturn}
          onChange={(userData) =>
            handleChange("expectedReturn", userData.target.value)
          }
        />
      </p>
      <p>
        <label>Duration </label>
        <input
          type="number"
          required
          value={userInput.duration}
          onChange={(userData) =>
            handleChange("duration", userData.target.value)
          }
        />
      </p>
    </section>
  );
}
