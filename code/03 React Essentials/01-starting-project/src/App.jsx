//import componentImg from "./assets/components.png";
//! No longer need image import as it's coming from data.js file
// import { CORE_CONCEPTS } from "./data.js";
// import { EXAMPLES } from "./data.js";
// import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
// import TabButton from "./components/TabButton/TabButton.jsx";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  
  return (
    <>
      <Header/>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
