import { useSetRecoilState } from 'recoil';

import { UsersApi, UserSecurity } from '@/gen/api';

import { authAtom } from '.';

export { useUserActions };

function useUserActions() {
  const usersApi = new UsersApi();
  const setAuth = useSetRecoilState(authAtom);

  return {
    login,
  };

  function login(username: string, password: string) {
    return usersApi.loginPost({ user: { username, password } }).then((user: UserSecurity) => {
      localStorage.setItem('auth', user.token);
      setAuth(user.token);
    });
  }
}
