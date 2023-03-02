import React, { useState, useEffect } from "react";

function Conversation({ match }) {
    const [conversation, setConversation] = useState(null);
    const [messageBody, setMessageBody] = useState("");

    useEffect(() => {
    const fetchConversation = async () => {
        try {
    const response = await fetch(`/conversations/${match.params.id}`);
    const data = await response.json();
    setConversation(data);
    } catch (error) {
    console.log(error);
    }
    };
    fetchConversation();
    }, [match.params.id]);

    const handleMessageSubmit = async (event) => {
        event.preventDefault();
        try {
    const response = await fetch(`/conversations/${match.params.id}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: messageBody }),
        });
        const data = await response.json();
        setConversation(data);
        setMessageBody("");
        } catch (error) {
        console.log(error);
    }
    };

    if (!conversation) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>
            {conversation.sender.username} to {conversation.recipient.username}
            </h2>
                <ul>
                {conversation.messages.map((message) => (
                    <li key={message.id}>
                    {message.sender.username}: {message.body}
                    </li>
                ))}
                </ul>
                    <form onSubmit={handleMessageSubmit}>
                        <input
                        type="text"
                        value={messageBody}
                        onChange={(event) => setMessageBody(event.target.value)}
                        />
                    <button type="submit">Send</button>
                    </form>
        </div>
    );
}

export default Conversation;