import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';

function App() {
  const handleLogout = () => {
    console.log('[Auth] تسجيل الخروج — يمكن توجيه المستخدم إلى صفحة تسجيل الدخول هنا.');
    // TODO: Clear auth tokens/session and redirect to /login
    // window.location.href = '/login';
    alert('تم تسجيل الخروج بنجاح! (محاكاة)');
  };

  return (
    <BrowserRouter>
      <Layout onLogout={handleLogout}>
        <Routes>
          <Route path="/"         element={<DashboardPage />} />
          <Route path="/users"    element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders"   element={<OrdersPage />} />
          {/* Placeholder routes — redirect to home until pages are built */}
          <Route path="/reports"  element={<Navigate to="/" replace />} />
          <Route path="/settings" element={<Navigate to="/" replace />} />
          {/* Catch-all */}
          <Route path="*"         element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
