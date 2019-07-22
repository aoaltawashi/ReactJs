import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> رؤية فريق العمل </h1> 
        <p> العمل ضمن فريق تطوعي بشكل متناغم لاكتساب المهارات العملية المرصودة وتنفيذ المهام المسندة بفاعلية </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
         <h> أعضاء الفريق </h>
         <p>عبدالكريم الطواشي – أنسام علي – مريم سليمان </p>
         <p>A@fortydays.com - للتواصل </p> 
        </a>
      </header>
    </div>
  );
}

export default App;
