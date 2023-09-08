
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("name");
  localStorage.removeItem("maxTime");
}

export function isAdmin() {
  return localStorage.getItem("admin") == "true";
}

export function isManager() {
  return localStorage.getItem("manager") == "true";
}

export function loginOk(resp) {
  localStorage.setItem("token", resp.token);
  localStorage.setItem("email", resp.user.email);
  localStorage.setItem("name", resp.user.name);
  localStorage.setItem("admin", resp.user.admin.toString());
  localStorage.setItem("manager", resp.user.manager.toString());
  let dataNow = new Date();
  let minutes = 60 * 24;
  let tokenObsoleteDate = new Date(dataNow.getTime() + minutes * 60000);
  let maxTime = JSON.stringify(tokenObsoleteDate);
  localStorage.setItem("maxTime", maxTime);
}

export function isAuthenticated() {
  var ret = localStorage.getItem("token");

  if (ret == null || ret == undefined) {
    location.href = "/login";
    return null;
  }

  var strMaxTime = localStorage.getItem("maxTime");

  if (strMaxTime == null || strMaxTime == undefined) {
    location.href = "/login";
    return null;
  }

  var maxTime = new Date(JSON.parse(strMaxTime));
  var dataNow = new Date();

  if (dataNow > maxTime) {
    location.href = "/login";
    return null;
  }
}

export function getUserLogged() {
  var ret = localStorage.getItem("token");
  if (ret == null || ret == undefined) {
    return null;
  }
  return {
    email: localStorage.getItem("email"),
    nome: localStorage.getItem("name"),
  };
}
