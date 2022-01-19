import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Modals from "./pages/components/modals/Modals";
import LoggedinPage from "./pages/LoggedinPage";
import LoginPage from "./pages/LoginPage";
import MessagesPage from "./pages/MessagesPage";

export default function App() {
  const [modal, setModal] = useState('')

  return (
    <div className="app">
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route path='/login' element={<LoginPage setModal={setModal} />} />
        <Route path='/logged-in' element={<LoggedinPage />} />
        <Route path='/logged-in/:conversationId' element={<MessagesPage />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      <Modals modal={modal} setModal={setModal} />
    </div>
  )
}