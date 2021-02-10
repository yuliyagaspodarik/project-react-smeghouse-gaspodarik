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

  const updateUser = await userResponse.json();

  return updateUser;
}

export async function getUser(newUser) {
  const users = await getData("users");

  const user = users.find(user => user.userName === newUser.userName && user.password === newUser.password);

  return user;
}

export async function addUserData(user) {
  const userInBase = await getUser(user);

  if (userInBase) {
    await updateUserData(userInBase.id, user);
  } else {

    const addResponse = await fetch(`${apiRoot}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!addResponse.ok) {
      return;
    }

    const userInBaseResponse = await addResponse.json();

    return userInBaseResponse;
  }
}
