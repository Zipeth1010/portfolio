import "./App.css";
import AboutComponent from "./Components/About";
import NavBar from "./Components/NavBar";
import ProjectsComponent from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutComponent />
      <ProjectsComponent />
    </div>
  );
}

export default App;
