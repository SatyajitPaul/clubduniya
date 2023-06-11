import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();
const URL = process.env.REACT_APP_SOCKET_SERVER;
const socket = io(URL);

const ContextProvider = ({ children }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [clientCount, setClientCount] = useState(0);

    //Useing useEffect will initialize the socket coonection
    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected");
            setIsConnected(true);
            socket.on("numberOfClients", (data) => {
                console.log("Count Recived");
                setClientCount(data.numberOfClients);
            })
        });
    },[]);



    return (
        <SocketContext.Provider value={{ clientCount }}>
            {children}
        </SocketContext.Provider>
    );
}
export { ContextProvider, SocketContext };