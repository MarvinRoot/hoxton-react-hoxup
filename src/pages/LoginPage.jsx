import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

export default function LoginPage({ users,setModal }) {
    
    return (
        <div className="main-wrapper login">
            <section className="login-section">
                <h2>Choose your user!</h2>
                <UsersList setModal={setModal} users={users} />
            </section>
        </div>

    )
}