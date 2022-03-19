import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from './components/About'
import Qualification from './components/Qualification'
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MyForm from "./components/MyForm";
import LoadingBar from 'react-top-loading-bar'


function App() {
  const [progress, setProgress] = useState(0)
  const setLoad = (p) => {
    setProgress(p)
  }
  return (
    <div>
      <LoadingBar
        height={4}
        color='#00A1E4'
        progress={progress}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setLoad={setLoad} />} />
        <Route path="/about" element={<About setLoad={setLoad} />} />
        <Route path="/qualification" element={<Qualification setLoad={setLoad} />} />
        <Route path="/skills" element={<Skills setLoad={setLoad} />} />
        <Route path="/projects" element={<Projects setLoad={setLoad} />} />
        <Route path="/contact" element={<MyForm setLoad={setLoad} />} />
        <Route path="*" element={<h1> No page exist</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
