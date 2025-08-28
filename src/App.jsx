import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Tutorial from "./pages/Tutorial";
import Blog from "./pages/Blog";
import Community from "./pages/Community";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="docs" element={<Docs />} />
        <Route path="tutorial" element={<Tutorial />} />
        <Route path="blog" element={<Blog />} />
        <Route path="community" element={<Community />} />
      </Route>
    </Routes>
  );
};

export default App;
