import React from "react";

export default function ChatList() {
  const chats = ["Alice", "Bob", "Charlie"];

  return (
    <ul className="mt-4">
      {chats.map((chat, i) => (
        <li
          key={i}
          className="p-2 border-b cursor-pointer hover:bg-gray-100 rounded-lg"
        >
          {chat}
        </li>
      ))}
    </ul>
  );
}
