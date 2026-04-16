import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AdminDashboard from './UIBlocks/Dashboard/AdminDashboard/AdminDashboard'
import Courses from './UIBlocks/Courses/Courses'
import NotFound from './UIBlocks/NotFound/NotFound'


function LogoutPage() {
  return (
    <div className="rounded-3xl bg-card p-8 shadow-sm border border-border">
      <h2 className="text-2xl font-semibold text-foreground">Logged out</h2>
      <p className="mt-3 text-sm text-muted-foreground">
        You have successfully logged out of Nexus LMS.
      </p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="*" element={<NotFound />} />
          <Route path="logout" element={<LogoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
