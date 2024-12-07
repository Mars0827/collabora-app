const MessageContainer = ({ messages }) => {
    return (
        <div>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index} className="mb-2">
                        <p>
                            <strong>{msg.username}</strong>: {msg.msg}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageContainer;
