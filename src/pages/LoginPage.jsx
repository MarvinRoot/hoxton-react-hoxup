import User from "./components/User"
import UsersList from "./components/UsersList"

export default function LoginPage({ users, setModal }) {

    return (
        <div className="main-wrapper login">
            <section className="login-section">
                <h2>Choose your user!</h2>
                {/* <UsersList setModal={setModal} users={users} /> */}
                <ul>
                    {users.map(user => {
                        <User key={user.id} user={user} />
                    })}
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