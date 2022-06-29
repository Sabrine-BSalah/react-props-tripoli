import ChildComponent from "./Components/ChildComponent";
import propsImage from "./assets/props.png";

import "./App.css";

function App() {
  const getName = (name) => {
    alert(`Hello, i am ${name} !`);
  };

  return (
    <div className="App">
      <h2>Parent Component</h2>
      <ChildComponent
        name={"John"}
        age="20"
        isStudent={true}
        skills={["html", "css", "js"]}
        lang={{ english: "excellent", french: "good" }}
        getName={getName}
      >
        <img src={propsImage} alt="props one way data flow" />
      </ChildComponent>
    </div>
  );
}

export default App;
