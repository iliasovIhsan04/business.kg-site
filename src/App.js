import { Route, Routes } from "react-router";
import "./assets/css/app.css";
import "./assets/css/index.css";
import "./assets/css/fonts.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
