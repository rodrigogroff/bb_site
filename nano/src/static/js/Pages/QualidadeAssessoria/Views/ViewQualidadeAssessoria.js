import Menu from "@app/Components/Menu";
import MyCss from "./base.css.js";

export default class {
  static getHtml() {
    return `
        <style>${MyCss.getHtml()}</style>
        <div align='center'>
            ${Menu.getHtml()}
            <br><h1 style='color:#EFEFED'>Qualidade</h1>
            <div align='center' style='margin-bottom:120px'>
                <div style='width:500px'>
                    <div align='left'>
                        <h1 style='color:#EFEFED'><span style='color: #5CB8FF;font-style:italic'>Assessoria</span></h1>
                        <p style='color: #CACACA'>
                        A building Box atua como um parceiro estratégico para garantir que o software seja desenvolvido
                        com alta qualidade, cumprindo requisitos e atendendo às expectativas dos usuários finais. Oferecemos
                        orientação, suporte e expertise em todo o ciclo de vida do desenvolvimento de software.
                        </p>
                        <p style='color: #CACACA;margin-bottom:20px'>
                            <span style='color:white;font-weight:bold'>— Definição de padrões e melhores práticas</span><br>
                            Podemos orientar a definição de padrões e melhores práticas de teste que devem ser seguidos pela
                            equipe de desenvolvimento. Isso inclui a criação de diretrizes para a escrita de casos de teste,
                            o uso de ferramentas de automação de teste, a gestão de defeitos (Exemplos: <span style='color:white;font-weight:bold'>Azure</span>, Testlink,
                            Mantis, Jira, etc…) e outros processos relacionados ao teste de software.
                        </p>
                        <p style='color: #CACACA;margin-bottom:20px'>
                            <span style='color:white;font-weight:bold'>— Revisão de requisitos</span><br>
                            Podemos orientar a definição de padrões e melhores práticas de teste que devem ser seguidos pela
                            equipe de desenvolvimento. Isso inclui a criação de diretrizes para a escrita de casos de teste,
                            o uso de ferramentas de automação de teste, a gestão de defeitos (Exemplos: <span style='color:white;font-weight:bold'>Azure</span>, Testlink,
                            Mantis, Jira, etc…) e outros processos relacionados ao teste de software.
                        </p>
                        <p style='color: #CACACA;margin-bottom:20px'>
                            <span style='color:white;font-weight:bold'>— Avaliação de riscos</span><br>
                            Podemos orientar a definição de padrões e melhores práticas de teste que devem ser seguidos pela
                            equipe de desenvolvimento. Isso inclui a criação de diretrizes para a escrita de casos de teste,
                            o uso de ferramentas de automação de teste, a gestão de defeitos (Exemplos: <span style='color:white;font-weight:bold'>Azure</span>, Testlink,
                            Mantis, Jira, etc…) e outros processos relacionados ao teste de software.
                        </p>
                        <p style='color: #CACACA;margin-bottom:20px'>
                            <span style='color:white;font-weight:bold'>— Estratégia de Testes</span><br>
                            Podemos orientar a definição de padrões e melhores práticas de teste que devem ser seguidos pela
                            equipe de desenvolvimento. Isso inclui a criação de diretrizes para a escrita de casos de teste,
                            o uso de ferramentas de automação de teste, a gestão de defeitos (Exemplos: <span style='color:white;font-weight:bold'>Azure</span>, Testlink,
                            Mantis, Jira, etc…) e outros processos relacionados ao teste de software.
                        </p>
                        <p style='color: #CACACA;margin-bottom:20px'>
                            <span style='color:white;font-weight:bold'>— Apoio na Automação de Testes</span><br>
                            Podemos orientar a definição de padrões e melhores práticas de teste que devem ser seguidos pela
                            equipe de desenvolvimento. Isso inclui a criação de diretrizes para a escrita de casos de teste,
                            o uso de ferramentas de automação de teste, a gestão de defeitos (Exemplos: <span style='color:white;font-weight:bold'>Azure</span>, Testlink,
                            Mantis, Jira, etc…) e outros processos relacionados ao teste de software.
                        </p>
                        <p style='color: #CACACA;margin-bottom:20px'>
                            <span style='color:white;font-weight:bold'>— Avaliação de Desempenho</span><br>
                            Podemos orientar a definição de padrões e melhores práticas de teste que devem ser seguidos pela
                            equipe de desenvolvimento. Isso inclui a criação de diretrizes para a escrita de casos de teste,
                            o uso de ferramentas de automação de teste, a gestão de defeitos (Exemplos: <span style='color:white;font-weight:bold'>Azure</span>, Testlink,
                            Mantis, Jira, etc…) e outros processos relacionados ao teste de software.
                        </p>
                        <p style='color: #CACACA;margin-bottom:20px'>
                            <span style='color:white;font-weight:bold'>— Monitoramento de Métricas de Qualidade</span><br>
                            Podemos orientar a definição de padrões e melhores práticas de teste que devem ser seguidos pela
                            equipe de desenvolvimento. Isso inclui a criação de diretrizes para a escrita de casos de teste,
                            o uso de ferramentas de automação de teste, a gestão de defeitos (Exemplos: <span style='color:white;font-weight:bold'>Azure</span>, Testlink,
                            Mantis, Jira, etc…) e outros processos relacionados ao teste de software.
                        </p>
                        <p style='color: #CACACA;margin-bottom:20px'>
                            <span style='color:white;font-weight:bold'>— Relatórios e Comunicação</span><br>
                            Podemos orientar a definição de padrões e melhores práticas de teste que devem ser seguidos pela
                            equipe de desenvolvimento. Isso inclui a criação de diretrizes para a escrita de casos de teste,
                            o uso de ferramentas de automação de teste, a gestão de defeitos (Exemplos: <span style='color:white;font-weight:bold'>Azure</span>, Testlink,
                            Mantis, Jira, etc…) e outros processos relacionados ao teste de software.
                        </p>
                        <p style='color: #CACACA;margin-bottom:20px'>
                            <span style='color:white;font-weight:bold'>— Treinamento e Capacitação</span><br>
                            Podemos orientar a definição de padrões e melhores práticas de teste que devem ser seguidos pela
                            equipe de desenvolvimento. Isso inclui a criação de diretrizes para a escrita de casos de teste,
                            o uso de ferramentas de automação de teste, a gestão de defeitos (Exemplos: <span style='color:white;font-weight:bold'>Azure</span>, Testlink,
                            Mantis, Jira, etc…) e outros processos relacionados ao teste de software.
                        </p>
                        <p style='color: #CACACA;margin-bottom:20px'>
                            <span style='color:white;font-weight:bold'>— Melhoria Contínua</span><br>
                            Podemos orientar a definição de padrões e melhores práticas de teste que devem ser seguidos pela
                            equipe de desenvolvimento. Isso inclui a criação de diretrizes para a escrita de casos de teste,
                            o uso de ferramentas de automação de teste, a gestão de defeitos (Exemplos: <span style='color:white;font-weight:bold'>Azure</span>, Testlink,
                            Mantis, Jira, etc…) e outros processos relacionados ao teste de software.
                        </p>
                    </div>
                </div>
            </div>
        </div>`;
  }
}
