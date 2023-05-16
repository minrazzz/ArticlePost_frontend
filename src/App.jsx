import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./page/Home";
import Login1 from "./components/Login1";

import Layout from "./components/Layout";
import Signup from "./components/Signup";

import { UserContextProvider } from "./contexts/UserContext";
import CreateArticle from "./page/CreateArticle";
import ArticleView from "./page/ArticleView";

function App() {
  return (
    <>
      <main className="min-h-screen min-w-full bg-red-50  dark:bg-[#0E162A] ">
        <main className="main  max-w-screen-md mx-auto py-2 ">
          <UserContextProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login1 />} />
                <Route path="/create-article" element={<CreateArticle />} />
                <Route path="/article/:id" element={<ArticleView />} />
                <Route path="/home" element={<Home />} />
              </Route>
            </Routes>
          </UserContextProvider>
        </main>
      </main>
    </>
  );
}

export default App;
