import React from "react";
import logo from "./logo.svg";
import Header from "./components/common/header/Header";
import "./App.scss";
import Footer from "./components/common/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header body-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </header>
      <Footer />
    </div>
  );
}

export default App;
