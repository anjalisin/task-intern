import React from "react";

export default function ChatWindow() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        <p className="mb-2"><strong>Alice:</strong> Hey there!</p>
        <p><strong>You:</strong> Hi Alice 👋</p>
      </div>
      <div className="p-4 border-t flex">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 border rounded-lg p-2"
        />
        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}
