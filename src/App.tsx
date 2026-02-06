import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ResumeReportPage from './pages/resume-report'
import ResumeUploadPage from './pages/resume-upload'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/resume-report" element={<ResumeReportPage />} />
        <Route path="/resume-upload" element={<ResumeUploadPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  </BrowserRouter>
)

export default App
