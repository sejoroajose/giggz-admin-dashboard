import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div
      className="min-h-screen bg-red-200 flex flex-col relative"
      style={{
        backgroundImage: `url('/auth-flow/background-vector.svg')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'none',
        backgroundColor: '#EFFFFF',
      }}
    >
      <header className="p-6 lg:p-8 relative z-10">
        <img src="/LOGO.svg" alt="Giggz Logo" className="h-16 w-auto" />
      </header>

      <main className="flex-1 flex items-center justify-center px-6 lg:px-8 py-12 relative z-10">
        <div className="w-full max-w-lg">
          <div className="bg-white p-12  backdrop-blur-sm bg-opacity-95">
            <Outlet />
          </div>
        </div>
      </main>

      <footer className="p-6 lg:p-8 relative z-10">
        <div className="max-w-md mx-auto">
          <p className="text-gray-500 text-sm text-center">
            © 2025 Giggz. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default AuthLayout
