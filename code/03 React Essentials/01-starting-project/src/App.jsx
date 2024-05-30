
//import componentImg from "./assets/components.png";
//! No longer need image import as it's coming from data.js file
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx"
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";



function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* This way doesn't work after deconstructing at CoreConcept function level */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            /> */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
