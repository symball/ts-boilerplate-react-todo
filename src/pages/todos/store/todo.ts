import { atom, selector } from 'recoil';

import { Todo, TodoApi } from '@api';
import { TodoFilterType } from '@/pages/todos/lib';

export const todoDetailsAtom = atom({
  key: 'todoDetailsAtom',
  default: {} as Todo,
});

export const todoListAtom = atom({
  key: 'todoListAtom',
  default: [] as Array<Todo>,
});

export const todoListFilterAtom = atom({
  key: 'todoListFilterAtom',
  default: TodoFilterType.ALL,
});

export const filteredTodoListSelector = selector({
  key: 'filteredTodoListSelector',
  get: ({ get }) => {
    const filter = get(todoListFilterAtom);
    const list = get(todoListAtom);

    switch (filter) {
      case TodoFilterType.COMPLETE:
        return list.filter((item) => item.complete);
      case TodoFilterType.INCOMPLETE:
        return list.filter((item) => !item.complete);
      default:
        return list;
    }
  },
});
