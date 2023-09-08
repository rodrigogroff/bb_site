
export default class {
  static getHtml() {

    var company = localStorage.getItem("company")

    return `<div align='center' class="button block" 
            style="background-color:#722B92;color:white;font-weight:bold;padding-top:20px;padding-bottom:30px">
            ${company}
            </div><br>`;
  }
}
