import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import Conversation from "./components/Conversation"

export default function LoggedinPage({ users, currentUser, setCurrentUser }) {
    const [conversations, setConversations] = useState([])

    const navigate = useNavigate()
    const params = useParams()
    
    useEffect(() => {
        if (currentUser === null) navigate('/login')
    }, [currentUser])
    
    useEffect(() => {
        fetch(`http://localhost:4000/conversations?userId=${currentUser.id}`)
            .then(resp => resp.json())
            .then(conversationsFromServer => setConversations(conversationsFromServer))
    }, [])


    if (currentUser === null) return <h1>User Not Found</h1>

    return (
        <div className="main-wrapper">
            {/* <!-- Side Panel --> */}
            <aside>
                {/* <!-- Side Header --> */}
                <header className="panel">
                    <img
                        className="avatar"
                        width="50"
                        height="50"
                        src={currentUser.avatar}
                        alt=""
                    />

                    <h3>{currentUser.firstName} {currentUser.lastName}</h3>
                </header>

                {/* <!-- Search form --> */}
                <form className="aside__search-container">
                    <input
                        type="search"
                        name="messagesSearch"
                        placeholder="Search chats"
                        value=""
                    />
                </form>

                {/* <!--  Side Chat List goes here. Check side-chat-list.html

 -->*/}
                <ul>
                    {/* <!-- This first item should always be present --> */}
                    <li>
                        <button className="chat-button">
                            <div><h3>+ Start a new Chat</h3></div>
                        </button>
                    </li>
                    {/* <!--  --> */}

                    {conversations.map(conversation => {
                        const talkingToId = currentUser.id === conversation.userId
                            ? conversation.participantId : conversation.userId

                        const talkingToUser = users.find(user => user.id === talkingToId)
                        return (
                            <li onClick={()=> navigate(`/logged-in/${conversation.id}`)}>
                                <button>
                                    <img
                                        className="avatar"
                                        src={talkingToUser.avatar}
                                        height="50"
                                        width="50"
                                        alt="" />
                                    <div>
                                        <h3>{talkingToUser.firstName} {talkingToUser.lastName}</h3>
                                        <p>Last Message</p>
                                    </div>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </aside>

            {/* <!-- Main Chat Section --> */}
            {params.conversationId ? (
                <Conversation currentUser={currentUser}/>
            ) : null}
        </div>
    )
}