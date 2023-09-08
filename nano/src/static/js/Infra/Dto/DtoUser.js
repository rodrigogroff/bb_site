
export function DtoUser(id, email, name, active, admin, manager, fkProfile, fkUserType, password, phone) {
  return {
    id: id,
    email: email,
    name: name,
    active: active,
    admin: admin,
    manager: manager,
    fkProfile: fkProfile,
    fkUserType: fkUserType,
    password: password,
    phone: phone
  };
}
