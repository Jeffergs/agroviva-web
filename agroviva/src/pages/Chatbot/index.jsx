import { useState, useRef, useEffect } from "react";
import chatbotQuestionario from '../../data/chatbotQuestionario.js';
import './chatbot.css'
import ChatJanela from "../../components/ChatJanela/index.jsx";

function Chatbot() {

    const [messages, setMessages] = useState([
        { from: "bot", text: "Olá! 👋 Bem-vindo à AgroViva. Sou seu assistente virtual e estou aqui para te auxiliar.  Escolha seu perfil:" },
        { from: "options", options: ["Agricultor", "Comunidade"] }
    ]);

    const [step, setStep] = useState("perfil");
    const [perfil, setPerfil] = useState(null);
    const [categoria, setCategoria] = useState(null);

    const messagesContainerRef = useRef(null);

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop =
                messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    function addUserMessage(text) {
        setMessages(prev => [...prev, { from: "user", text }]);
    }

    function addBotMessage(text) {
        setMessages(prev => [...prev, { from: "bot", text }]);
    }

    function handleAction(opcao) {

        addUserMessage(opcao);

        if (step === "perfil") {

            const perfilSelecionado = opcao.toLowerCase();
            setPerfil(perfilSelecionado);

            const categorias = Object.keys(chatbotQuestionario[perfilSelecionado]);

            addBotMessage("Escolha uma categoria:");
            setMessages(prev => [
                ...prev,
                { from: "options", options: categorias }
            ]);

            setStep("categoria");
            return;
        }

        if (step === "categoria") {

            setCategoria(opcao);

            const perguntas = chatbotQuestionario[perfil][opcao].map(p => p.pergunta);

            addBotMessage("Escolha uma pergunta:");
            setMessages(prev => [
                ...prev,
                { from: "options", options: perguntas }
            ]);

            setStep("pergunta");
            return;
        }

        if (step === "pergunta") {

            const item = chatbotQuestionario[perfil][categoria].find(p => p.pergunta === opcao);

            addBotMessage(item.resposta);

            setMessages(prev => [
                ...prev,
                {
                    from: "options",
                    options: [
                        "Ver outras perguntas",
                        "Ver categorias",
                        "Trocar perfil",
                        "Encerrar"
                    ]
                }
            ]);

            setStep("navegacao");
            return;
        }

        if (step === "navegacao") {

            if (opcao === "Ver outras perguntas") {
                const perguntas = chatbotQuestionario[perfil][categoria].map(p => p.pergunta);

                addBotMessage("Escolha uma pergunta:");
                setMessages(prev => [
                    ...prev,
                    { from: "options", options: perguntas }
                ]);

                setStep("pergunta");
                return;
            }

            if (opcao === "Ver categorias") {
                const categorias = Object.keys(chatbotQuestionario[perfil]);

                addBotMessage("Escolha uma categoria:");
                setMessages(prev => [
                    ...prev,
                    { from: "options", options: categorias }
                ]);

                setStep("categoria");
                return;
            }

            if (opcao === "Trocar perfil") {
                setMessages([
                    { from: "bot", text: "Escolha seu perfil:" },
                    { from: "options", options: ["Agricultor", "Comunidade"] }
                ]);

                setStep("perfil");
                return;
            }

            if (opcao === "Encerrar") {
                addBotMessage("Conversa encerrada. Obrigado!");
            }
        }
    }

    return (
        <div className="chat">
            <div className="header_chat">
                <div className="header_texto">
                    <h1>VivaChat</h1>
                    <p>Assistente virtual da AgroViva</p>
                </div>
            <div className="viva-status">
                <span className="dot-online" />
                Online
            </div>
            </div>

            <ChatJanela
                messages={messages}
                step={step}
                onAction={handleAction}
                messagesContainerRef={messagesContainerRef}
            />
        </div>
    );
}

export default Chatbot;