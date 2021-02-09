const apiRoot = "http://localhost:5000";

export async function getData(request) {
  const dataResponse = await fetch(`${apiRoot}/${request}/`);

  if (!dataResponse.ok) {
    console.log(`Error with status ${dataResponse.status}`);
    return;
  }

  const data = await dataResponse.json();

  return data;
}

export async function getUserData(userId) {
  const userResponse = await fetch(`${apiRoot}/users/${userId}/`);

  if (!userResponse.ok) {
    return;
  }

  const user = await userResponse.json();

  return user;
}
