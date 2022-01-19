import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

export default function LoginPage({setModal}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/users').then(resp => resp.json())
        .then(usersFromServer => setUsers(usersFromServer))
    }, [])
    
    return (
        <div className="main-wrapper login">
            <section className="login-section">
                <h2>Choose your user!</h2>
                <UsersList setModal={setModal} users={users} />
            </section>
        </div>

    )
}