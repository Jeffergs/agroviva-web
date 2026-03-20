import ChatMenssagem from "../ChatMenssagem";
import ChatOpcoes from "../ChatOpcoes";

function ChatJanela({ messages, onAction }) {

  function handleOptionClick(option) {
    onAction(option);
  }

  return (
    <div className="messages">
      {messages.map((msg, index) => {

        if (msg.from === "bot" || msg.from === "user") {
          return (
            <ChatMenssagem
              key={index}
              from={msg.from}
              text={msg.text}
            />
          );
        }

        if (msg.from === "options") {
          return (
            <ChatOpcoes
              key={index}
              options={msg.options}
              onSelect={handleOptionClick}
            />
          );
        }

        return null;
      })}
    </div>
  );
}

export default ChatJanela;