import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Characters from "./Views/Characters";
import About from "./Views/About";
import Info from "./Views/Info";
import Character from "./Views/Character";
import NavBar from "./Views/Navbar";
import { Provider } from "react-redux";
import "./App.css";
import store from "./Store/Store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index="Home" element={<Home />} />
            <Route path="Characters" element={<Characters />} />
            <Route path="Info" element={<Info />} />
            <Route path="About" element={<About />} />
            <Route path="/Character/:id" element={<Character />} />
            <Route path="*" element={<h1> Error 404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
