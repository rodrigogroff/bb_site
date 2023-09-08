import "@app/Infra/global.script.js";
import MasterPageSingle from "@app/Components/Views/MasterPageSingle";
import Controller from "./CtrlDashboard";
const router = () => { document.getElementById("myApp").innerHTML = MasterPageSingle.getHtml(new Controller().getHtml()); };
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => { router(); });
