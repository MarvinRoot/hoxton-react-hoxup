import { Navigate, Route, Routes } from "react-router-dom";
import LoggedinPage from "./pages/LoggedinPage";
import LoginPage from "./pages/LoginPage";
import MessagesPage from "./pages/MessagesPage";

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/logged-in' element={<LoggedinPage />} />
        <Route path='/logged-in/:conversationId' element={<MessagesPage />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}