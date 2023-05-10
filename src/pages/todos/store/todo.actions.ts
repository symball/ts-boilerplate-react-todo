import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import {
  Configuration,
  Todo,
  TodoApi,
  TodosGet200Response,
  TodosGetById200Response,
  TodosGetByIdRequest,
  TodosPost200Response,
  TodosPutById200Response,
} from '@api';
import { todoDetailsAtom, todoListAtom } from '@/pages/todos/store/todo';
import { replaceItemAtIndex } from '@/lib/array';

export { useTodoActions };

function useTodoActions() {
  const todoApi = new TodoApi(new Configuration({ credentials: 'include' }));
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const setTodoDetails = useSetRecoilState(todoDetailsAtom);

  return {
    add,
    get,
    update,
  };

  function add(title: string) {
    return todoApi
      .todosPost({
        todosPostRequest: {
          title,
        },
      })
      .then((response: TodosPost200Response) => {
        const newTodoList = [...todoList, response.data];
        setTodoList(newTodoList);
      });
  }

  function get(todoId: number) {
    return todoApi
      .todosGetById({
        todoId,
      })
      .then((response: TodosGetById200Response) => {
        setTodoDetails(response.data);
      });
  }

  function update(todo: Todo) {
    const index = todoList.findIndex((item) => item.id == todo.id);
    return todoApi
      .todosPutById({ todoId: todo.id, todosPutByIdRequest: todo })
      .then((response: TodosPutById200Response) => {
        const newList = replaceItemAtIndex(todoList, index, response.data);
        setTodoList(newList);
      });
  }
}
