"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LobbyChat() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.trim()) {
      localStorage.setItem("chatUsername", username);
      router.push("/chat");
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Chat</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Ingrese nombre de usuario"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // Futuristic gradient
    fontFamily: "'Orbitron', sans-serif", // Futuristic font
    color: "#E0E0E0",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
    textShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF", // Neon effect
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#E0E0E0",
    fontSize: "16px",
    outline: "none",
    boxShadow: "0 2px 5px rgba(0, 255, 255, 0.2)", // Glowing border
    transition: "box-shadow 0.3s ease, background-color 0.3s ease",
  },
  inputFocus: {
    boxShadow: "0 4px 15px rgba(0, 255, 255, 0.4)",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #00FFFF, #0066FF)",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontFamily: "'Orbitron', sans-serif",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0, 255, 255, 0.3)", // Neon button
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  buttonHover: {
    transform: "scale(1.05)",
    boxShadow: "0 6px 15px rgba(0, 255, 255, 0.5)",
  },
};
