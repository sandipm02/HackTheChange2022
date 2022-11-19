import LoginPage from "./components/LoginPage";
import LandingPage from "./components/landingPage";
import Socials from "./components/Socials";
import Content from "./components/Content";
import Features from "./components/Features";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
        <LandingPage/>
        <Socials/>
        <Content/>
        <Features/>
    </div>
  );
}

export default App;
