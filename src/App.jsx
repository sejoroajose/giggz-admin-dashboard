import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { AuthProvider } from './components/context/AuthContext'
import { NotificationProvider } from './components/context/NotificationContext'
import AuthLayout from './components/auth/AuthLayout'
import Login from './components/auth/Login'
import ForgotPassword from './components/auth/ForgotPassword'
import CheckEmail from './components/auth/CheckEmail'
import CreateNewPassword from './components/auth/CreateNewPassword'
import DashboardLayout from './components/dashboard/DashboardLayout'
import Dashboard from './components/Dashboard'
import Database from './components/database'
import Analytics from './components/analytics/Analytics'
import GiggzManagement from './components/giggzManagement'
import Disputes from './components/disputes'
import Chats from './components/chats'
import ProtectedRoute from './components/common/ProtectedRoute'
import Verification from './components/verification'
import Payroll from './components/payroll'
import './index.css'

function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-primary-100">
            <Routes>
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="check-email" element={<CheckEmail />} />
                <Route path="reset-password" element={<CreateNewPassword />} />
              </Route>

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="database" element={<Database />} />
                <Route path="giggz-management" element={<GiggzManagement />} />
                <Route path="disputes" element={<Disputes />} />
                <Route path="verification" element={<Verification />} />
                <Route path="chats" element={<Chats />} />
                <Route path="payroll" element={<Payroll />} />
              </Route>

              <Route path="/" element={<Navigate to="/auth/login" replace />} />
              <Route
                path="/auth"
                element={<Navigate to="/auth/login" replace />}
              />

              <Route path="*" element={<Navigate to="/auth/login" replace />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </NotificationProvider>
  )
}

export default App
