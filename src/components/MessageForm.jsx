"use client";

import { createMessage } from "@/utils/api-chat";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MessageForm({ onMessageSent }) {
    const [content, setContent] = useState("");
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        const username = localStorage.getItem("chatUsername");

        if (!username) {
            router.push("/");
            return;
        }

        if (content.trim()) {
            try {
                await createMessage(username, content);
                setContent("");
                onMessageSent();
            } catch (error) {
                console.log("Error enviando mensaje", error);
            }
        }
    }

    function handleKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Evitar el salto de línea en el textarea
            handleSubmit(e); // Llamar al envío del mensaje
        }
    }

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={3}
                    placeholder="Escribe un mensaje..."
                    required
                    onKeyDown={handleKeyDown} // Manejar Enter
                    style={styles.textarea}
                ></textarea>
                <button type="submit" style={styles.button}>Enviar</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        marginTop: '20px',
        padding: '20px',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', // Futuristic gradient
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
        fontFamily: "'Orbitron', sans-serif", // Futuristic font
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    textarea: {
        resize: 'none',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#E0E0E0',
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '14px',
        outline: 'none',
        boxShadow: '0 2px 5px rgba(0, 255, 255, 0.2)', // Glowing effect
        transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        background: 'linear-gradient(135deg, #00FFFF, #0066FF)',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: "'Orbitron', sans-serif",
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0, 255, 255, 0.3)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
};
