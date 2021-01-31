const apiRoot = "http://localhost:5000";

export async function getAllProducts() {
  const allProductsResponse = await fetch(`${apiRoot}/products/`);

  if (!allProductsResponse.ok) {
    console.log(`Error with status ${allProductsResponse.status}`);
    return;
  }

  const products = await allProductsResponse.json();
  console.log('request products', products);

  return products;
}

export async function getAllFilters() {
  const allFiltersResponse = await fetch(`${apiRoot}/filters/`);

  if (!allFiltersResponse.ok) {
    console.log(`Error with status ${allFiltersResponse.status}`);
    return;
  }

  const filters = await allFiltersResponse.json();
  console.log('request filters', filters);

  return filters;
}

export async function getContacts() {
  const contactsResponse = await fetch(`${apiRoot}/contacts/`);

  if (!contactsResponse.ok) {
    console.log(`Error with status ${contactsResponse.status}`);
    return;
  }

  const contacts = await contactsResponse.json();
  console.log('request filters', contacts);

  return contacts;
}
