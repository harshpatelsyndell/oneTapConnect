import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Plans from "./pages/Plans";
import AccountBilling from "./components/AccountBilling";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/acount&billing" element={<AccountBilling />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
