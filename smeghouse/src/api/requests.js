const apiRoot = "http://localhost:5000";

export async function getAllProducts() {
  const allProductsResponse = await fetch(`${apiRoot}/products/`);

  if (!allProductsResponse.ok) {
    console.log(`Error with status ${allProductsResponse.status}`);
    return;
  }

  const products = await allProductsResponse.json();
  console.log('request', products);

  return products;
}
