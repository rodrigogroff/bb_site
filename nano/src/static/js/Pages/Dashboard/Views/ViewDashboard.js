import Menu from "@app/Components/Menu";
import MyCss from "./base.css.js";

export default class {
  static getHtml() {
    return `
        <style>${MyCss.getHtml()}</style>
        ${Menu.getHtml()}
        <div align='center' style='margin-bottom:120px'>
          <br><br><br><br>
          <img id='logo' style='opacity:0' src='src/static/img/logoWeb3.png' srcset='src/static/img/logoWeb3.png 1x' alt='Logo' width='536' height='260'/>
          <br>
          <h1 id='logoSlogan' style='opacity:0;color:#EFEFED'>Soluções <span style='color: #5CB8FF;font-style:italic'>digitais</span> para sua empresa!</h1>
        </div>`;
  }
}
