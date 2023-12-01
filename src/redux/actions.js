
// action creators => function 

export const addTodo = (data) => {
    return {
        type:'todoList/addTodo',
        payload: data
    }
}

export const searchFilterChange = (text) => {
    return {
        type:'filter/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type:'filter/statusFilterChange',
        payload: status
    }
}

export const priorityChange = (priorities) => {
    return {
        type:'filter/priorityChange',
        payload: priorities
    }
}