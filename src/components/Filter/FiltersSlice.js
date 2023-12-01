const initState = {
    search: '',
    status: 'ALL',
    priority: []
}


const filtersReducer = (state = initState , action) => {
    switch(action.type) {
        case 'filter/searchFilterChange':
            return {
                ...state,
                search: action.payload
            };
        case 'filter/statusFilterChange':
            return {
                ...state,
                status: action.payload
            };
        case 'filter/priorityChange':
            return {
                ...state,
                priorities: action.payload
            }
        default:
            return state;
    }
}

export default filtersReducer;