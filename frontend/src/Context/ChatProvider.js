import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext("");

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  const [notification,setNotification] = useState([])
  const navigate = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(JSON.parse(localStorage.getItem("userInfo")));
        }, 0);
      });
      setUser(userInfo);
      if (!userInfo) {
        navigate.push("/");
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <ChatContext.Provider
      value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats,notification,setNotification }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  const context = useContext(ChatContext);
  return context;
};

export default ChatProvider;
