
export function DtoProject(id, name, desc, fkClient, active, fkCompanyUnit) {
  return {
    id: id,
    name: name,
    desc: desc,
    fkClient: fkClient,
    active: active,
    fkCompanyUnit: fkCompanyUnit
  };
}
