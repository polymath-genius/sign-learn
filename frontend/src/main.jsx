import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Translation from './pages/translation.jsx';
import SidebarLayout from './components/sidebar-layout.jsx';
import { TooltipProvider } from "@/components/ui/tooltip"
import Courses from './pages/courses.jsx';
import CourseId from './pages/courseId.jsx';
import QuizId from './pages/quizId.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route element={<SidebarLayout />} >
            <Route path="/translation" element={<Translation />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:courseId" element={<CourseId />} />
            <Route path="/quiz/:quizId" element={<QuizId />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </StrictMode>,
)