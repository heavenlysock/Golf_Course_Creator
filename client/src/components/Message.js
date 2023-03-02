import React, { useState } from "react";

function Message(props) {
    const [messageBody, setMessageBody] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/conversations/${props.conversationId}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body: messageBody })
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    setMessageBody("");
    })
    .catch(error => console.log(error));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    New Message:
                    <input
                    type="text"
                    value={messageBody}
                    onChange={event => setMessageBody(event.target.value)}
                    />
                </label>
            <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default Message;