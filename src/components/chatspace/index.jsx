import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import chatGroups from "@/data/chatspace";

const ChatSpace = () => {
  const [selectedGroup, setSelectedGroup] = useState(chatGroups[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        id: selectedGroup.messages.length + 1,
        sender: "You",
        role: "student",
        content: newMessage,
        timestamp: new Date().toISOString(),
      };
      setSelectedGroup({
        ...selectedGroup,
        messages: [...selectedGroup.messages, newMessageObj],
      });
      setNewMessage("");
    }
  };

  return (
    <Layout>
      <div className="pb-20 px-5 w-full">
        <div className="flex w-full h-full">
          <div className="w-2/5 overflow-y-scroll p-2 rounded-l-lg bg-card border-r">
            <div className="sticky top-0 p-4 text-text-light border-b-2 mb-4">
              <h2 className="text-2xl font-bold">Chat Groups</h2>
            </div>
            <div className="space-y-2 px-4">
              {chatGroups.map((group) => (
                <div
                  key={group.id}
                  className={`p-2 py-3 mb-3 cursor-pointer shadow-md hover:shadow-lg transition-all border border-card rounded text-lg ${
                    selectedGroup.id === group.id
                      ? "bg-primary text-white"
                      : "bg-white hover:bg-background-lighter text-black"
                  }`}
                  onClick={() => handleGroupClick(group)}
                >
                  {group.name}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border-l bg-card rounded-r-lg flex flex-col p-2">
            <div className="flex-1 overflow-y-scroll mb-4">
              <div className="sticky top-0 p-4 text-text-light border-b-2 mb-4">
                <h2 className="text-2xl font-bold">{selectedGroup.name}</h2>
              </div>
              <div className="space-y-2 px-4">
                {selectedGroup.messages.map((message) => (
                  <div
                    key={message.id}
                    className="py-2 px-5 bg-white hover:bg-background-lighter shadow hover:shadow-lg transition-all border rounded"
                  >
                    <p className="font-bold">{message.sender}</p>
                    <p>{message.content}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(message.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex rounded-lg">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 py-3 px-2 focus:outline-none rounded-l"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary text-white py-3 px-6 rounded-r active:bg-primary-dark"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatSpace;
