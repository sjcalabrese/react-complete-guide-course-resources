import { useState } from "react";

export default function UserInput( {onInputChange, userInput}) {
  



  return (
    <section id="user-input">
      <p>
        <label>Initial Investment</label>
        <input
          type="number"
          required
          value={userInput.initialInvestment}
          onChange={(userData) =>
            onInputChange("initialInvestment", userData.target.value)
          }
        />
      </p>
      <p>
        <label>Annual Investment</label>
        <input
          type="number"
          required
          value={userInput.annualInvestment}
          onChange={(userData) =>
            onInputChange("annualInvestment", userData.target.value)
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
            onInputChange("expectedReturn", userData.target.value)
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
            onInputChange("duration", userData.target.value)
          }
        />
      </p>
    </section>
  );
}
