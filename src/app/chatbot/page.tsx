"use client";

import { useState } from "react";
import Message from "./components/message";

import bot from "@/app/assets/noob.png";
import placeholder from "@/app/assets/profile-placeholder.png";

export default function Chatbot() {
  const [showFaq, setShowFaq] = useState(true);
  const [userInput, setUserInput] = useState("");

  const handleShowFaq = () => {
    setShowFaq(false);
  };

  const [messages, setMessages]: any = useState([
    {
      picture: bot,
      message:
        "Olá eu sou Noob, assistente virtual do Champions Tracker, estou aqui para te ajudar! ☺",
      type: "sender",
      actions: (
        <div className="flex flex-col gap-3">
          <button className="bg-[#0A092D] rounded-lg py-2 text-sm hover:bg-[#6E8ED9] hover:text-[#04031F] transition">
            Criar campeonato
          </button>
          <div className="w-full flex gap-3">
            <button className="w-full bg-[#0A092D] rounded-lg py-2 text-sm hover:bg-[#6E8ED9] hover:text-[#04031F] transition">
              Criar equipe
            </button>
            <button
              onClick={handleShowFaq}
              className="w-full bg-[#0A092D] rounded-lg py-2 text-sm hover:bg-[#6E8ED9] hover:text-[#04031F] transition"
            >
              FAQ
            </button>
          </div>
        </div>
      ),
    },
    {
      hidden: showFaq,
      picture: bot,
      message: "Escolha uma opção para saber mais:",
      type: "sender",
      actions: (
        <ol className="list-decimal p-2 px-9 bg-[#0A092D] rounded-lg text-sm flex flex-col gap-1">
          <li>Como lalalla</li>
          <li>Como lalallalalalla</li>
          <li>Blox Fruits</li>
          <li>Comer canjica</li>
          <li>Comer canjica só que em outra mensagem</li>
        </ol>
      ),
    },
  ]);

  const handleInputChange = (event: any) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = (event: any) => {
    if (event.key === "Enter" && userInput.trim() !== "") {
      setMessages([
        ...messages,
        { picture: placeholder, message: userInput, type: "receiver" },
      ]);
      setUserInput("");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#04031F]">
      <div className="relative mx-auto w-full max-w-2xl min-h-screen bg-[#04031F] border-2 border-[#6E8ED9]">
        <header className="w-full px-5 py-2 bg-[#6E8ED9] flex items-center">
          <a
            href=""
            className="w-5 h-5 flex items-center justify-center rounded-full p-6 hover:bg-[#04031F]/10 transition"
          >
            <i className="text-xl text-black">&larr;</i>
          </a>
        </header>
        <div className="w-full overflow-y-auto px-8 py-7 flex flex-col gap-10">
          {messages.map((msg, index) => (
            <>
              <Message
                key={index}
                hidden={msg.hidden}
                picture={msg.picture ? msg.picture : placeholder}
                message={msg.message}
                type={msg.type}
              >
                {msg.actions}
              </Message>
            </>
          ))}
        </div>
        <footer className="absolute bottom-0 px-5 py-4 w-full bg-[#04031F]">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleSendMessage}
            className="w-full rounded-full bg-[#0A092D] border-none text-white text-sm py-3 px-8"
            placeholder="Digite sua mensagem..."
          />
        </footer>
      </div>
    </div>
  );
}
