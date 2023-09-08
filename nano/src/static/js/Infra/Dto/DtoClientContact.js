
export function DtoClientContact(id, name, email, phone, obs) {
  return {
    id: id,
    name: name,
    email: email,
    phone: phone,
    obs: obs,
    start: '',
  };
}
