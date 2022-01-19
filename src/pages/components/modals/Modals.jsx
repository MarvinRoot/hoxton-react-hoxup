import NewUserModal from "./NewUserModal";

export default function Modals({ modal, setModal, addUser }) {
    if (modal === '') {
        return null
    }
    else if(modal === 'add-user'){
        return <div>{<NewUserModal setModal={setModal} addUser={addUser} />}</div>
    }
}