import { useParams } from "react-router-dom"

export default function MessagesPage() {
    const params = useParams()
    return (
        <div>
            <h1>{params.conversationId}</h1>
        </div>
    )
}