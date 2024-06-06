//import componentImg from "./assets/components.png";
//! No longer need image import as it's coming from data.js file
import { useState} from 'react';
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');
  let tabContent = 'Please click a button';

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx', 'props', 'state'
    
    console.log(selectedButton);
    // no longer need tabContent
    //tabContent = selectedButton;
    //updating  setSelectedTopic instead
    setSelectedTopic(selectedButton);
  }
  console.log('App component only renders once :)')
  console.log('selected topic ' + selectedTopic);
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* Updated this to selected topic */}
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
