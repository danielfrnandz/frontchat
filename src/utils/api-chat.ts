import axios from 'axios';

const API_URL = "http://127.0.0.1:4000/api/chat/";

// Define la estructura de un mensaje
export interface Message {
  id?: number; 
  username: string;
  content: string;
  createdAt?: string; 
}

// Función para obtener los mensajes
export async function getMessages(): Promise<Message[] | undefined> {
  try {
    const response = await axios.get<Message[]>(API_URL + "messages/");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo mensajes", error);
  }
}

// Función para crear un nuevo mensaje
export async function createMessage(username: string, content: string): Promise<Message | undefined> {
  try {
    const message: Omit<Message, 'id' | 'createdAt'> = {
      username,
      content
    };

    const response = await axios.post<Message>(API_URL + "messages/create/", message);
    return response.data;
  } catch (error) {
    console.error("Error creando mensaje", error);
  }
}
