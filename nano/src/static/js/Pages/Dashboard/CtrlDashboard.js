import { fadeIn } from "@app/Infra/ScreenFX";
import MyForm from "./Views/ViewDashboard";

export default class {

  getHtml() {
    return MyForm.getHtml();
  }

  constructor() {
   $(document).ready(function () {
      setTimeout(() => {
        fadeIn(document.getElementById("logo"),1200);
        setTimeout(() => {
          fadeIn(document.getElementById("logoSlogan"),120);
        }, 1200);
      }, 600);
    });
  }
}
