// const urlLogin = 'http://127.0.0.1:8000/api/v1/auth/login/';
// const url = 'http://127.0.0.1:8000/api/v1/accounts/';

const urlLogin = 'http://10.0.0.192:8000/api/v1/auth/login/';
const url = 'http://10.0.0.192:8000/api/v1/accounts/';


export async function getToken(username, password) {
  const response = await fetch(urlLogin, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ 'username': username, 'password': password })
  });

  const content = await response.json();
  return content.token;
}

// REGISTER   !q2w3e4r
const urlRegister = 'http://10.0.0.192:8000/api/v1/user/add/';
export async function register(username, password, password2) {
  const response = await fetch(urlRegister, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'username': username, 'password': password, 'password2': password2 })
  });

  const content = await response.json();
  // console.warn('register')
  return content;
}

// CREATE
export async function create(token, account) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    },
    body: JSON.stringify({'nome': account.nome, 'tel': '3', 'dt_nasc': '2021-03-13'})
  }); 

  const content = await response.json();
  // console.warn('create')
  return content;
}

// READ
export default async function getData(token){
  const response = await fetch(url, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': 'Token ' + token
      }
  });
  const accountJason = await response.json();
  // console.warn(accountJason)
  return accountJason;
}

// UPDATE
export async function update(token, account) {
  const response = await fetch(url + account.id + '/', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    },
    body: JSON.stringify({ 'nome': account.nome, 'tel': account.tel, 'dt_nasc': account.dt_nasc})
  });

  const content = await response.json();
  // console.warn('update')
  return content;
}

// DESTROY
export async function destroy(token, account) {
  const response = await fetch(url + account.id + '/', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    },
  });

  const content = await response.json();
  // console.warn('destroy')
  return content;
}
