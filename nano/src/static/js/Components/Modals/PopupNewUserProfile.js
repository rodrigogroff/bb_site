import StringField from "@app/Components/Fields/String";

export default class {
    static getHtml(elements) {
        return `<div class="popup-overlay" id="popUpSystemConfirm_newUserProfile">
                <div class="popup-container" style='margin-top:50px;max-width:475px' align='center'>
                    <div class="popup-header">
                        <h3 style='padding-left:32px;color:black' class="popup-title" id='popUpSystemConfTitle'>Novo perfil de usuário</h3>
                        <span id='popupClose' class="popup-close" data-dismiss="true">X</span>
                    </div>
                    <div class="popup-content">
                        <div style='margin-left:80px;margin-right:80px' align='left'>
                            <br>
                            <br>
                            <label for='${elements.formNewUserType_Name}'>Nome do perfil</label>
                            <div style="margin-right:10px;margin-top:6px">
                            ${StringField.getHtml(elements.formNewUserType_Name, 50, '')}
                            </div>
                            <br>
                            <br>
                            <a id="${elements.btnNewUserType}" class="button circle block green">Criar tipo</a>
                            <br>
                            <br>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}
