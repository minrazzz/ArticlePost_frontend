import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./page/Home";
import Login from "./components/Login";
import Register1 from "./components/Register1";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <main className="min-h-screen min-w-full bg-red-50  dark:bg-[#0E162A]">
        <main className="main  max-w-screen-md mx-auto py-2 ">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register1" element={<Register1 />} />
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </main>
      </main>
    </>
  );
}

export default App;
