import LoginPage from "./components/LoginPage";
import LandingPage from "./components/landingPage";
import Socials from "./components/Socials";
import Content from "./components/Content";
import Features from "./components/Features";
import Blog from "./components/Blog";
import Images from "./components/Images";
import Images2 from "./components/Images2";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <LandingPage/>
        <Socials/>
        <Images/>
        <Images2/>
        <Content/>
        <Features/>
    </div>
  );
}

export default App;
