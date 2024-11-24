import { useEffect, useRef } from "react";

export default function MessageList({ messages }) {
    const scrollRef = useRef(null);
    const currentUser = localStorage.getItem("chatUsername"); // Obtenemos el usuario actual

    useEffect(() => {
        // Siempre desplazar el contenedor hacia abajo cuando cambien los mensajes
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div style={styles.scrollContainer} ref={scrollRef}>
            <ul style={styles.messageList}>
                {messages?.map((message) => {
                    const isCurrentUser = message.author.name === currentUser;

                    return (
                        <li
                            key={message.id}
                            style={{
                                ...styles.message,
                                ...(isCurrentUser ? styles.currentUserMessage : styles.otherUserMessage),
                            }}
                        >
                            <span
                                style={{
                                    ...styles.author,
                                    ...(isCurrentUser ? styles.currentUserAuthor : styles.otherUserAuthor),
                                }}
                            >
                                {message.author.name}:
                            </span>
                            <span style={styles.content}>
                                {message.content}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


const styles = {
    scrollContainer: {
        height: "400px",
        overflowY: "auto",
        padding: "10px",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 2px 10px rgba(0, 255, 255, 0.2)",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
    },
    messageList: {
        listStyleType: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    message: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "10px",
        borderRadius: "8px",
        fontSize: "14px",
        maxWidth: "75%", 
        wordWrap: "break-word", 
        overflowWrap: "break-word", 
        whiteSpace: "pre-wrap",
        hyphens: "auto", 
    },
    currentUserMessage: {
        background: "linear-gradient(135deg, #007777, #0033AA)",

        color: "#FFFFFF",
        alignSelf: "flex-end", 
        textAlign: "right",
        boxShadow: "0 4px 10px rgba(0, 255, 255, 0.4)",
    },
    otherUserMessage: {
        background: "linear-gradient(135deg, #2c5364, #203a43)",
        color: "#E0E0E0",
        alignSelf: "flex-start", 
        textAlign: "left",
        boxShadow: "0 2px 8px rgba(0, 255, 255, 0.2)",
    },
    author: {
        fontWeight: "bold",
        marginBottom: "5px",
    },
    currentUserAuthor: {
        color: "#FFFFFF",
        textShadow: "0 0 5px #00FFFF",
    },
    otherUserAuthor: {
        color: "#00FFFF",
        textShadow: "0 0 5px #0066FF",
    },
    content: {
        wordWrap: "break-word", // Divide palabras largas
        overflowWrap: "break-word", // Fuerza ajuste en palabras largas
        whiteSpace: "pre-wrap", // Conserva los saltos de línea
        hyphens: "auto", // Para dividir palabras largas con guiones si es necesario
    },
};

