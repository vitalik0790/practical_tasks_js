import Dupes from "./tasks/Dupes";
import Flatten from "./tasks/Flatten";
import Frequency from "./tasks/Frequency";
import Rotate from "./tasks/Rotate";
import Unique from "./tasks/Unique";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Unique />
      <Flatten />
      <Dupes />
      <Frequency />
      <Rotate />
    </div>
  );
}

export default App;
