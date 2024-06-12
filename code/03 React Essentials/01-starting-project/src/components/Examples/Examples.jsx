import TabButton from "../TabButton/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../../data.js";

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
  );
}
