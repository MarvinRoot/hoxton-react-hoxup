import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Modals from "./pages/components/modals/Modals";
import LoggedinPage from "./pages/LoggedinPage";
import LoginPage from "./pages/LoginPage";
import MessagesPage from "./pages/MessagesPage";

export default function App() {
  const [modal, setModal] = useState('')
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/users').then(resp => resp.json())
      .then(usersFromServer => setUsers(usersFromServer))
  }, [])

  function addUser(firstName, lastName, phoneNumber) {
    //update state
    let updatedUsers = JSON.parse(JSON.stringify(users))
    updatedUsers.push({ firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, avatar: `https://avatars.dicebear.com/api/avataaars/${firstName}${lastName}.svg` })
    setUsers(updatedUsers)
    //update server
    return fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, avatar: `https://avatars.dicebear.com/api/avataaars/${firstName}${lastName}.svg` })
    }).then(resp => resp.json())
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route path='/login' element={<LoginPage setCurrentUser={setCurrentUser} users={users} setModal={setModal} />} />
        <Route path='/logged-in' element={<LoggedinPage modal={modal} setModal={setModal} users={users} currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path='/logged-in/:conversationId' element={<LoggedinPage modal={modal} setModal={setModal} users={users} currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      <Modals addUser={addUser} modal={modal} setModal={setModal} createConversation={undefined} usersNotTalkedTo={undefined} />
    </div>
  )
}