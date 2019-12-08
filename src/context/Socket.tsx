import React, { useState } from 'react';
import io, { Socket } from 'socket.io-client';

export interface Update {
    slide: string;
    index: number;
}
export interface Shortcut {
    index: number;
}
export type Message = string | Shortcut | Update;
export type onMessage = (message) => void;

export interface SocketContext {
    socket: Socket;
    suscribe: (event: string, onmessage: onMessage) => void;
    emit: (event: string, message: Message) => void;
}

export const voidContext: SocketContext = {
    socket: Socket,
    suscribe: (event: string, onmessage: onMessage) => console.warn('undefined'),
    emit: (event: string, message: Message) => console.warn('undefined'),
};

export const SocketContext = React.createContext(voidContext);

export const SocketProvider = ({ children }) => {
    const [socket] = useState<Socket>(io('http://localhost:3002'));
    const emit = (event: string, message: Message) => {
        socket.emit(event, message);
    };
    const suscribe = (event: string, onMessage: onMessage) => {
        socket.on(event, onMessage);
    };
    const context = { socket, suscribe, emit };
    return <SocketContext.Provider value={context}>{children}</SocketContext.Provider>;
};
