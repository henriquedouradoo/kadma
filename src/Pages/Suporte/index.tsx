import './styles.css'

export function Suporte() {
    return(
        <div>
            <div className="container">
                <h3>Perguntas Frequentes (FAQ) sobre Gestão de Dados e Suporte Técnico</h3>
                <div className="faq-item">
                    <div className="faq-question">
                        O que é gestão de dados e por que é importante?
                    </div>
                    <div className="faq-answer">
                    Gestão de dados envolve a coleta, armazenamento, organização e proteção dos dados de uma organização. É crucial para garantir a integridade, acessibilidade e segurança das informações, permitindo tomadas de decisão informadas e proteção contra perdas e ataques.
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">
                    Como posso começar a implementar uma estratégia de gestão de dados?
                    </div>
                    <div className="faq-answer">
                    Inicie identificando e avaliando os dados que sua organização possui, defina políticas e processos para o gerenciamento desses dados, escolha as ferramentas apropriadas para coleta e análise, e treine sua equipe para garantir que todos sigam as melhores práticas.
                    </div>
                </div>
                < div className='faq-question'>
                Quais ferramentas de gestão de dados são recomendadas?
                </div>
                <div className='faq-answer'>
                Existem várias ferramentas de gestão de dados, como Microsoft SQL Server, Oracle Database, e Snowflake. A escolha da ferramenta depende das necessidades específicas da sua organização e da integração com seus sistemas existentes.
                </div>
            </div>
        </div>
    )
}