/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  if (currentUser) {
  }
  return {
    canAdmin: currentUser && currentUser.access === 'admin', // 检查是否有admin权限访问控制对象，如果没有则为false。 (optional) 创建一个access对象，如果没有admin权限，则返回false。 (optional) 如果有admin权限，则返回
  };
}
