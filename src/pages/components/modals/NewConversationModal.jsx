export default function NewConversationModal({ createConversation, usersNotTalkedTo, setModal }) {

    return (
        <div className='modal-wrapper' onClick={() => setModal("")}>
            <div className='modal'>
                <button className='close-modal' onClick={() => setModal("")}>
                    X
                </button>
                <h1>Start chat</h1>
                {usersNotTalkedTo.length>0 ? (
                    <ul>
                        {usersNotTalkedTo.map(user => (
                            <li key={user.id}>
                                <button
                                    className='chat-button'
                                    onClick={() => {
                                        createConversation(user.id)
                                    }}
                                >
                                    <img
                                        className='avatar'
                                        height='50'
                                        width='50'
                                        alt=''
                                        src={user.avatar}
                                    />
                                    <div>
                                        <h3>
                                            {user.firstName} {user.lastName}
                                        </h3>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No new person to talk to</p>
                )}
            </div>
        </div>
    )
}