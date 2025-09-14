import React from "react";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";

export default function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 border-r p-4">
        <NewChat />
        <ChatList />
      </div>

      {/* Chat Window */}
      <div className="flex-1">
        <ChatWindow />
      </div>
    </div>
  );
}
