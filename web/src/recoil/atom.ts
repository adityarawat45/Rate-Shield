import { atom } from 'recoil';

export const selectedPageState = atom<string>({
  key: 'selectedPageState', // Unique ID for this atom
  default: 'API_CONFIGURATION', // Default value
});

export const drawerState = atom<boolean>({
  key : 'drawerState',
  default : false
})
