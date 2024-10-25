
import { useEffect } from 'react';

export function ChatBot() {
  useEffect(() => {
    // Configuração do Watson Assistant
    window.watsonAssistantChatOptions = {
      integrationID: "6fb11ebe-d48e-4c1e-87b4-8c0d9b49216b", // The ID of this integration.
      region: "us-east", // The region your integration is hosted in.
      serviceInstanceID: "a1b19b20-2624-49ce-99c7-cda29a84e258", // The ID of your service instance.
      onLoad: async (instance) => { await instance.render(); }
    };

    // Carregar o script do Watson Assistant
    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + 
                  (window.watsonAssistantChatOptions.clientVersion || 'latest') + 
                  "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);

    // Limpeza do script quando o componente é desmontado
    return () => {
      document.head.removeChild(script);
    };
  }, []); // O array vazio garante que isso só seja executado uma vez quando o componente for montado.
}

