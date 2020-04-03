import { API_BASE } from './constants';

export const getFilesForUser = (token) => new Promise((res, rej) => {
  if (!token) rej();
  fetch(`${API_BASE}/files`, {
    method: 'GET',
    headers: { token },
  }).then((response) => response.json()).then(res).catch(rej);
});

export const meCall = (token) => new Promise((res, rej) => {
  if (!token) rej();
  fetch(`${API_BASE}/me`, {
    method: 'GET',
    headers: { token },
  }).then((response) => response.json()).then(res).catch(rej);
});

export const fileCountCall = (token) => new Promise((res, rej) => {
  if (!token) rej();
  fetch(`${API_BASE}/file_count`, {
    method: 'GET',
    headers: { token },
  }).then((response) => response.json()).then(res).catch(rej);
});

export const notifyCall = (email) => new Promise((res, rej) => {
  const formData = new FormData();
  formData.append('email', email);
  fetch(`${API_BASE}/notify`, {
    method: 'POST',
    body: formData,
  }).then((response) => response.json()).then(res).catch(rej);
});
