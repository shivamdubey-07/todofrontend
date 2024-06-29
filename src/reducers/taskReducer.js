const initialState = {
    tasks: [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TASKS':
            return {
                ...state,
                tasks: action.payload,
            };
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task._id === action.payload._id ? action.payload : task
                ),
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload),
            };
        case 'TOGGLE_TASK_DONE':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task._id === action.payload._id ? action.payload : task
                ),
            };
        default:
            return state;
    }
};

export default taskReducer;
