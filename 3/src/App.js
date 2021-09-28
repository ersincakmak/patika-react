import "./app.css";
import Cards from "./components/Cards";
import DropDown from "./components/DropDown";
import { WeatherProvider } from "./context/weatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <div className="container">
          <DropDown />
          <Cards />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
