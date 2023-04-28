import { request } from '@umijs/max';

// 获取首页轮播数据
export async function fetchAnouncement() {
  return request<DashboardAPI.AnnouncementResponse>('/api/v1/user/notice/fetch', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

// 获取首页轮播数据2
export async function fetchAnouncementWithRequests() {
  return request<DashboardAPI.Announcement[]>('/api/v1/user/notice/fetch', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}
