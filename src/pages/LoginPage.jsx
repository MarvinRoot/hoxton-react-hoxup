import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

export default function LoginPage() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/users').then(resp => resp.json())
        .then(usersFromServer => setUsers(usersFromServer))
    }, [])

    if (users === []) return <p>Loading...</p>
    return (
        <div className="main-wrapper login">
            <section className="login-section">
                <h2>Choose your user!</h2>
                    <UsersList users = {users}/>
                    {/* <li>
                        <button className="user-selection">
                            <img
                                className="avatar"
                                width="50"
                                height="50"
                                src="https://robohash.org/1"
                                alt=""
                            />
                            <h3>John Doe</h3>
                        </button>
                    </li>
                    <li>
                        <button className="user-selection">
                            <img
                                className="avatar"
                                width="50"
                                height="50"
                                src="https://robohash.org/2"
                                alt=""
                            />
                            <h3>Tin Man</h3>
                        </button>
                    </li>
                    <li>
                        <button className="user-selection">
                            <img
                                className="avatar"
                                width="50"
                                height="50"
                                src="https://robohash.org/3"
                                alt=""
                            />
                            <h3>Carl T-800</h3>
                        </button>
                    </li> */}
                    <li>
                        <button className="user-selection"><h3>+ Add a new user</h3></button>
                    </li>
            </section>
        </div>

    )
}