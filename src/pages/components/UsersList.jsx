import User from "./User"

export default function UsersList(props) {
    if (props.users === null) return <p>Loading...</p>

    return(
        <ul>
            {props.users.map(user => {
            <User user = {user}/>
        })}
        </ul>
        
    )
}