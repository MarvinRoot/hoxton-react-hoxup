import { useParams } from "react-router-dom"

export default function MessagesPage() {
    const params = useParams()
    return (
        console.log(params.conversationId)
    )
}