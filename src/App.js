import "./css/App.scss";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      {
        // Use this code if you ever use multiple pages (HashRouter if github pages, Browser Router for AWS)
        // <HashRouter>
        //   <Navbar />
        //   <Routes>
        //     <Route path="/" element={<Home />}/>
        //     <Route path="/newpage" element={<Newpage />}/>
        //   </Routes>
        //   <Footer />
        // </HashRouter>
      }
    </div>
  );
}

export default App;
