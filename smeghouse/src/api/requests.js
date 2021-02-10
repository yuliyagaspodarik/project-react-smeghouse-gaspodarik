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

export async function updateUserData(userId, patch) {
  const userResponse = await fetch(`${apiRoot}/users/${userId}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patch),
  });

  if (!userResponse.ok) {
    return;
  }
/*
  const userPatch = await userResponse.json();
  console.log('patch', userPatch);
  return userPatch;*/
}


