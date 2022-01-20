import { useNavigate } from "react-router-dom"

export default function User({user, setCurrentUser}) {

    const navigate = useNavigate()
    return (
        <li style={{cursor: 'pointer'}} onClick={()=> {
            setCurrentUser(user)
            navigate('/logged-in')
        }
            }>
            <button className="user-selection">
                <img className="avatar" src={user.avatar} alt="" width={50} height={50} />
                <h3>{user.firstName} {user.lastName}</h3>
            </button>
        </li>
    )
}