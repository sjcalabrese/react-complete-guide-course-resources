import reactImg from "../../src/assets/investment-calculator-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header id="header">
      <img src={reactImg} alt="Money Bag" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
