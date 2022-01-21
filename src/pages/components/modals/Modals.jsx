import NewConversationModal from "./NewConversationModal";
import NewUserModal from "./NewUserModal";

export default function Modals({ createConversation, modal, usersNotTalkedTo, setModal, addUser }) {
    if (modal === '') {
        return null
    }
    else if(modal === 'add-user'){
        return <div>{<NewUserModal setModal={setModal} addUser={addUser} />}</div>
    }
    else if(modal === 'start-chat'){
        return <div>{<NewConversationModal createConversation={createConversation} usersNotTalkedTo={usersNotTalkedTo} setModal={setModal}/>}</div>
    }
}