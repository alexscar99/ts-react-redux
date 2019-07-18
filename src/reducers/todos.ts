import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.FetchTodos:
            return action.payload;
        case ActionTypes.DeleteTodo:
            return action.payload;
        default:
            return state;
    }
};
