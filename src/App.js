import "./App.css";
import About from "./Page/About";
import Header from "./components/Header";
import bgHeroImage from "./assets/hero-bg-image.png";

const App = () => {
  return (
    <div
      className="bg-slate-50 bg-top  bg-no-repeat "
      style={{
        backgroundImage: `url(${bgHeroImage})`,
      }}
    >
      <Header />
      <About />
    </div>
  );
};

export default App;
