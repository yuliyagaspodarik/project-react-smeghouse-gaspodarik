const apiRoot = "http://localhost:3000";

export async function getAllProducts() {
  fetch(`${apiRoot}/products/`)
    .then(res => res.json())
    .then((result) => {
      console.log('getallprod', result);
    return result.products})
  /*const allProductsResponse = await fetch(`${apiRoot}/products/`);

  if (!allProductsResponse.ok) {
    console.log(`Error with status ${allProductsResponse.status}`);
    return;
  }

  const products = await allProductsResponse.json();
  console.log('req', products);
  return products;*/
}
