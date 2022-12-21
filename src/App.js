import React from "react";
import "./App.css";
import BlogPost from "./BlogPost";
// import ClassContextComponent from "./ClassContextComponent";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        {/* <ClassContextComponent /> */}
        <BlogPost />
      </ThemeProvider>
    </div>
  );
}

export default App;
