import { Routes, Route, Navigate } from 'react-router-dom'
import { Sidebar } from './components/Sidebar.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { Reports } from './pages/Reports.jsx'
import { Users } from './pages/Users.jsx'
import { Products } from './pages/Products.jsx'
import { Settings } from './pages/Settings.jsx'
import { Login } from './pages/Login.jsx'
import { useAuth } from './context/AuthContext.jsx'

function ProtectedLayout({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "24px" }}>
        {children}
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
      <Route path="/reports" element={<ProtectedLayout><Reports /></ProtectedLayout>} />
      <Route path="/users" element={<ProtectedLayout><Users /></ProtectedLayout>} />
      <Route path="/products" element={<ProtectedLayout><Products /></ProtectedLayout>} />
      <Route path="/settings" element={<ProtectedLayout><Settings /></ProtectedLayout>} />
    </Routes>
  );
}

export default App