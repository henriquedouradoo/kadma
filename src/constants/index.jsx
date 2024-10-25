import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";


export const navItems = [
  { label: "Diferenciais", href: "#" },
  { label: "Trabalho", href: "#" },
  { label: "Preços", href: "#" },
];


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Chatbot interativo",
    description:
      "Facilmente você decide o que deseja utilizando da ferramenta do chatbot.",
  },
  {
    icon: <Fingerprint />,
    text: "Simplicidade e automação inteligente",
    description:
      "Processos manuais são reduzidos ao mínimo, aumenta a produtividade e reduz erros humanos.",
  },
  {
    icon: <ShieldHalf />,
    text: "Segurança avançada e compliance",
    description:
      "Alto nível de segurança na automação do ERP, garantindo que dados sensíveis estejam protegidos contra ameaças.",
  },
  {
    icon: <BatteryCharging />,
    text: "Customização sob medida",
    description:
      "Soluções de ERP automatizadas que se ajustam especificamente às operações e necessidades exclusivas de cada cliente.",
  },
  {
    icon: <PlugZap />,
    text: "Integração multissistemas",
    description:
      "Capacidade de integrar com outras ferramentas e plataformas que a empresa já utiliza, como sistemas de CRM, BI, e-commerce, contabilidade, entre outros.",
  },
  {
    icon: <GlobeLock />,
    text: "Análise de dados em tempo real",
    description:
      "Funções de Business Intelligence (BI) e relatórios analíticos automatizados, proporcionando dados em tempo real para a tomada de decisão.",
  },
];

export const checklistItems = [
  {
    title: "Automação de Processos Repetitivos",
    description:
      "O chatbot com BI pode automatizar tarefas repetitivas que consomem tempo.",
  },
  {
    title: "Redução do Tempo de Atendimento ao Cliente",
    description:
      "Um chatbot inteligente pode fornecer respostas instantâneas e precisas, 24/7, aos clientes, reduzindo o tempo de espera e acelerando o atendimento.",
  },
  {
    title: "Tomada de Decisões Baseada em Dados em Tempo Real",
    description:
      "Acesso a dados em tempo real sobre interações com clientes, operações e desempenho de processos.",
  },
  {
    title: "Escalabilidade e Flexibilidade",
    description:
      "Empresas podem escalar suas operações rapidamente sem aumentar significativamente a necessidade de mão de obra.",
  },
];

export const pricingOptions = [
  {
    title: "Standard",
    price: "$899",
    features: [
      "Chatbot KDA.",
      "50 Gb Storage",
      "Análises em tempo real",
      "Colaboração de multissistemas",
      "Business Intelligence (BI)",
    ],
  },
  {
    title: "Pro",
    price: "$2500",
    features: [
      "Chatbot KDA.",
      "150 Gb Storage",
      "Análises em tempo real",
      "Colaboração de multissistemas",
      "Business Intelligence (BI)",
    ],
  },
  {
    title: "Enterprise",
    price: "$5000",
    features: [
      "Chatbot KDA.",
      "Unlimited Storage",
      "Análises em tempo real",
      "Colaboração de multissistemas",
      "Business Intelligence (BI)",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
