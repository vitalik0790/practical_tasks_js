import Dupes from "./tasks/Dupes";
import Flatten from "./tasks/Flatten";
import Frequency from "./tasks/Frequency";
import Unique from "./tasks/Unique";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Unique />
      <Flatten />
      <Dupes />
      <Frequency />
    </div>
  );
}

export default App;
