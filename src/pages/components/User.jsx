export default function User({user}) {
    // if (props.user === null) return <p>Loading...</p>

    return (
        <li>
            <button className="user-selection">
                <img className="avatar" src={user.avatar} alt="" width={50} height={50} />
                <h3>{user.firstName} {user.lastName}</h3>
            </button>
        </li>
    )
}