import { atom } from 'recoil';
import { defaultLoginPage } from '@/lib/config';

export const authAtom = atom({
  key: 'authExpires',
  default: localStorage.getItem('authExpires'),
});

export const loginRedirectAtom = atom({
  key: 'loginRedirect',
  default: defaultLoginPage,
});
