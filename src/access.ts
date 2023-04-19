/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  if (currentUser) {
    const user = currentUser;
    console.info(user);
  } else {
    const user = {};
    console.info(user);
  }

  return {
    // canAdmin: currentUser && currentUser.access === 'admin',

    canAdmin: true,
  };
}
