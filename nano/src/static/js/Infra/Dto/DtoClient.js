
export function DtoClient(id, name, desc, phone, site, address, addressNumber, addressComplement, city, country, zipcode, clientType) {
  return {
    id: id,
    name: name,
    desc: desc,
    phone: phone,
    site: site,
    address: address,
    addressNumber: addressNumber,
    addressComplement: addressComplement,
    city: city,
    country: country,
    zipcode: zipcode,
    clientType: clientType,
  };
}
