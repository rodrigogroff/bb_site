
export default class {
  static getHtml() {
    return `
    <div style='background-color: black;margin-top:-60px' width='100%'>
    <table align='center'><tr><td align='center'>
        <table><tr><td>
        <img src='src/static/img/logoMini.png' srcset='src/static/img/logoMini.png 1x' alt='Logo' width='39' height='38' style='cursor:pointer' onclick="location.href='/'" />
        </td><td>
        <nav class="dropdownmenu" style=''>
        <ul>
            <li><a href="#">Expertise</a>
            <ul id="submenu" style='width:220px'>
                <li><a href="#">Frontend refactory</a></li>
                <li><a href="#">Migração de legado</a></li>
                <li><a href="#">Soluções em software</a></li>
            </ul>
            </li>
            <li ><a href="#">Qualidade</a>
            <ul id="submenu" style='width:260px'>
                <li><a href="/qualidade_assessoria">Assessoria</a></li>
                <li><a href="#">Testes de stress UI</a></li>
                <li><a href="#">Testes de stress API</a></li>
                <li><a href="#">Cobertura de automação</a></li>
                <li><a href="#">Gerência de planos de teste</a></li>
            </ul>
            <li style='width:120px'><a href="#">Portfolio</a></li>
            <li style='width:120px'><a href="#">Sobre</a></li>
        </ul>
    </nav>
    </td></tr></table>
    </td></tr></table>
</div>

    `;
  }
}
