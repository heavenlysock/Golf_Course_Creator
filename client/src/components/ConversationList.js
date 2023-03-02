import React, { useState, useEffect } from "react";

function ConversationList() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    fetch("/conversations")
      .then(response => response.json())
      .then(data => setConversations(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map(conversation => (
          <li key={conversation.id}>
            {conversation.sender.username} to {conversation.recipient.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConversationList;