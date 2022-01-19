import User from "./User"

export default function UsersList({users, setModal}) {
    
    return (
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

    )
}