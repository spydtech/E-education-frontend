import {
    FIND_COURSES_REQUEST,
    FIND_COURSES_SUCCESS,
    FIND_COURSES_FAILURE,
    FIND_COURSE_BY_ID_REQUEST,
    FIND_COURSE_BY_ID_SUCCESS,
    FIND_COURSE_BY_ID_FAILURE,
    CREATE_COURSE_REQUEST,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_FAILURE,
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_FAILURE,
    DELETE_COURSE_REQUEST,
    DELETE_COURSE_FAILURE,
    DELETE_COURSE_SUCCESS,
    SEARCH_COURSE_SUCCESS,
} from "./ActionType";

const initialState = {
    courses: [],
    course: null,
    loading: false,
    error: null,
    deleteCourse: null,
    searchCourses: [],
};

const customerCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_COURSES_REQUEST:
        case FIND_COURSE_BY_ID_REQUEST:
            return { ...state, loading: true, error: null };

        case FIND_COURSES_SUCCESS:
            return { ...state, courses: action.payload, loading: false, error: null };
        case FIND_COURSE_BY_ID_SUCCESS:
            return { ...state, course: action.payload, loading: false };

        case FIND_COURSES_FAILURE:
        case FIND_COURSE_BY_ID_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case CREATE_COURSE_REQUEST:
        case UPDATE_COURSE_REQUEST:
        case DELETE_COURSE_REQUEST:
            return { ...state, loading: true, error: null };

        case CREATE_COURSE_SUCCESS:
            return { ...state, loading: false, courses: [...state.courses, action.payload] };
        case UPDATE_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                courses: state.courses.map((course) => (course.id === action.payload.id ? action.payload : course)),
            };
        case DELETE_COURSE_SUCCESS:
            return { ...state, loading: false, deleteCourse: action.payload };

        case SEARCH_COURSE_SUCCESS:
            return { ...state, loading: false, searchCourses: action.payload };

        case CREATE_COURSE_FAILURE:
        case UPDATE_COURSE_FAILURE:
        case DELETE_COURSE_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default customerCourseReducer;
