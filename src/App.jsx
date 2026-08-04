import React from 'react'
import {ThemeToggle} from './components/ThemeToggle.jsx'
import Sidebar from './components/Sidebar.jsx'
const App = () => {
  return (
    <div>
      <h1>Testing theme toggle</h1>
      <ThemeToggle/>
      <Sidebar/>
    </div>
  );
}

export default App