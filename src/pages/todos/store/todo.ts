import { atom, selector } from 'recoil';

import { Todo, TodoApi } from '@api';
import { authAtom } from '@store';

const todoApi = new TodoApi();

export const todoListFilterAtom = atom({
  key: 'todoListFilterAtom',
  default: 'all',
});

export const todosFetchSelector = selector({
  key: 'todosFetchSelector',
  get: async ({ get }) => {
    const authKey = get(authAtom);
    const { data } = await todoApi.todosGet({ headers: { Authorization: `Bearer ${authKey}` } });
    return data;
  },
});

const filteredTodoListSelector = selector({
  key: 'filteredTodoListSelector',
  get: ({ get }) => {
    const filter = get(todoListFilterAtom);
    const list = get(todosFetchSelector);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
