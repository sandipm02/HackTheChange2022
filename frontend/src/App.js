import LoginPage from "./components/LoginPage";
import { initializeDB } from "../../backend/api/firebaseConfig";
import HomePage from "./components/HomePage";

function App() {

  // Initializing Firebase DB connection
  initializeDB();

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        <HomePage />
      </h1>
    </div>
  );
}

export default App;
