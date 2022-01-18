export default function User(props) {
    if (props.user === null) return <p>Loading...</p>

    return (
        <li key={props.user.id}>
                <button className="user-selection">
                    <img className="avatar" src={props.user.avatar} alt="" width={50} height={50}/>
                    <h3>{props.user.firstName} {props.user.lastName}</h3>
                </button>
            </li>
    )
}