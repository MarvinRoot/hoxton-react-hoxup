import User from "./components/User"

export default function LoginPage({ users, setModal, setCurrentUser }) {

    return (
        <div className="main-wrapper login">
            <section className="login-section">
                <h2>Choose your user!</h2>
                <ul>
                    {users.map(user => 

                        <User key={user.id} user={user} setCurrentUser={setCurrentUser}/>
                    )}
                    <li>
                        <button onClick={() => setModal('add-user')}
                            className="user-selection">
                            <h3>+ Add a new user</h3>
                        </button>
                    </li>
                </ul>
            </section>
        </div>

    )
}