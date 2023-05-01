import { atom } from 'recoil';
import { defaultLoginPage } from '@/lib/config';

export const authAtom = atom({
  key: 'auth',
  default: localStorage.getItem('auth'),
});

export const loginRedirectAtom = atom({
  key: 'loginRedirect',
  default: defaultLoginPage,
});
