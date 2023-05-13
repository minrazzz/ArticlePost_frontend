import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./page/Home";
import Login1 from "./components/Login1";

import Layout from "./components/Layout";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <main className="min-h-screen min-w-full bg-red-50  dark:bg-[#0E162A] ">
        <main className="main  max-w-screen-md mx-auto py-2 ">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login1 />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </main>
      </main>
    </>
  );
}

export default App;
