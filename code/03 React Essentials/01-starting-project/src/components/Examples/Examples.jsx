import TabButton from "../TabButton/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import Section from "../Section.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
 

  function handleSelect(selectedButton) {
   
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
  }
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
    <Section title="Examples" id="examples">
      
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {/* Updated this to selected topic 
          {selectedTopic}*/}
      {/* !selectedTopic is similar to useing selectedTopic ===undefined */}
      {/* Null will allow you to render nothing */}
      {tabContent}
    </Section>
  );
}
