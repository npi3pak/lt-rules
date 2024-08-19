import "normalize.css";
import "./App.css";
import { Nouns } from "./pages/Nouns";
import Tabs, { POSITION } from "./components/Tabs";

const App = () => {
  return (
    <div className="flex flex-col items-center h-dvh">
      <Tabs navPosition={POSITION.BOTTOM}>
        <div title="🍎">
          <Nouns />
        </div>
        <div title="💅">
          <Nouns />
        </div>
        <div title="🏃‍♂️">
          <Nouns />
        </div>
      </Tabs>
    </div>
  );
};

export default App;
