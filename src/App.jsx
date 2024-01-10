import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
