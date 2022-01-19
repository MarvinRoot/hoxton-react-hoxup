import NewUserModal from "./NewUserModal";

export default function Modals({ modal, setModal }) {
    if (modal === '') {
        return null
    }
    else if(modal === 'add-user'){
        return <div>{<NewUserModal setModal={setModal} />}</div>
    }
}