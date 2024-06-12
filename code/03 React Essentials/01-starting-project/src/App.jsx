//import componentImg from "./assets/components.png";
//! No longer need image import as it's coming from data.js file
import { useState, Fragment } from "react";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  //Can use the state to get the data from data.js, but only if it selected
  //identifier being passed on button click matches object
  //from EXAMPLES in data.js file
  const [selectedTopic, setSelectedTopic] = useState();
  // let tabContent = "Please click a button";

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx', 'props', 'state'

    console.log(selectedButton);
    // no longer need tabContent
    //tabContent = selectedButton;
    //updating  setSelectedTopic instead
    setSelectedTopic(selectedButton);
  }
  console.log("App component only renders once :)");
  console.log("selected topic " + selectedTopic);

  let tabContent = <p>Please Select a Topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Fragment>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* To display the array of objects dynamically you will need to use .map
            This will iterate over each item in the array and then map it similar to how we were 
            manually doing it before. 
            
            In order to get rid of the error in chrome when inspecting, you will need to add a unique key*/}

            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}

            {/* This way doesn't work after deconstructing at CoreConcept function level */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            /> */}

            {/* ***********No longer needed now that we're using the map method. */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {/* Updated this to selected topic 
          {selectedTopic}*/}
          {/* !selectedTopic is similar to useing selectedTopic ===undefined */}
          {/* Null will allow you to render nothing */}
          {tabContent}
        </section>
      </main>
      </Fragment>
  );
}

export default App;
