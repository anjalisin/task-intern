import React from "react";
import { Plus } from "lucide-react";

export default function NewChat() {
  return (
    <button className="flex items-center w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      <Plus className="mr-2" size={16} />
      New Chat
    </button>
  );
}
