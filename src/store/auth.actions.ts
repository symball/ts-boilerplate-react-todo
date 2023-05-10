import { useSetRecoilState } from 'recoil';

import { Configuration, UsersApi, UserSecurity } from '@/gen/api';

import { authAtom } from '.';

export { useUserActions };

function useUserActions() {
  const usersApi = new UsersApi(new Configuration({ credentials: 'include' }));
  const setAuth = useSetRecoilState(authAtom);

  return {
    login,
  };

  function login(username: string, password: string) {
    return usersApi.loginPost({ user: { username, password } }).then((auth: UserSecurity) => {
      localStorage.setItem('authExpires', auth.expire);
      setAuth(auth.expire);
    });
  }
}
