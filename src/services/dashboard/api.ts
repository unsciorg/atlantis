import { request } from '@umijs/max';

export async function fetchAnouncement(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/v1/passport/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: {
      email: body.username,
      password: body.password,
    },
    // data: body,
    ...(options || {}),
  });
}
