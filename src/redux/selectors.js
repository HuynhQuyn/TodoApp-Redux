import { createSelector } from "reselect";

// export const todoListSelector = state => {
//     const searchText = searchTextSelector(state);
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(searchText);
//     })
//     return todoRemaining;
    
// };

export const searchTextSelector = state => state.filters.search;
export const filterStatusSelector = state => state.filters.status;
export const filterPrioritiesSelector = state => state.filters.priorities;
export const todoListSelector = state => state.todoList;
//reselect

export const todoRemainingSelector = createSelector(
    todoListSelector, 
    filterStatusSelector,
    searchTextSelector, 
    filterPrioritiesSelector,
    (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
        if ( status === 'ALL') {
            return priorities ? todo.name.includes(searchText) && priorities.includes(todo.priorities) : todo.name.includes(searchText)
        }
        return todo.name.includes(searchText) && 
        (status !== 'ALL' &&
        status === 'Completed' ? todo.completed : !todo.completed );
    });
})
