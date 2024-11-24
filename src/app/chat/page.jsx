"use client";

import MessageForm from "@/components/MessageForm";
import MessageList from "@/components/MessageList";
import { getMessages } from "@/utils/api-chat";
import { useEffect, useState } from "react";

export default function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("chatUsername") || "Invitado";
        }
        return "Invitado";
    });
    const [loading, setLoading] = useState(true);

    async function fetchMessages() {
        try {
            const response = await getMessages();
            if (JSON.stringify(response) !== JSON.stringify(messages)) {
                setMessages(response);
            }
        } catch (error) {
            console.log("Error obteniendo mensajes", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMessages();
        const interval = setInterval(fetchMessages, 1000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <div>Chat de {username}</div>
            <MessageList messages={messages}></MessageList>
            <MessageForm onMessageSent={fetchMessages}></MessageForm>
        </>
    );
}
