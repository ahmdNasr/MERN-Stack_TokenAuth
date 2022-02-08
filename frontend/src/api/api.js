async function postData(url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
    return response.json(); // parses JSON response into native JavaScript objects
}
  

export async function postRegisterUser({ firstname, lastname, email, password }) {
    const registerUrl = "http://localhost:9000/api/users/register"
    const registrationBody = { firstname, lastname, email, password }
    const result = await postData(registerUrl, registrationBody)
    return result
}
