import { Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { Reports } from './pages/Reports.jsx'
import { Users } from './pages/Users.jsx'
import { Products } from './pages/Products.jsx'
import { Settings } from './pages/Settings.jsx'

const App = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App