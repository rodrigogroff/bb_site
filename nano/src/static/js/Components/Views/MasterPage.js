
export default class {
  static getHtml(page, menu, logo) {
    return `<div class="wrapper" align="center">${menu}<div class="wrapper-inline img shadow" >
            <header id='appHeader'>
              <div class="navi-menu-button"><em></em><em></em><em></em></div>
              ${logo}                    
            </header>
            <main><section class="container"><br><div id='mainFormApp'>${page}</div></section></main>
            </div></div>`;
  }
}
