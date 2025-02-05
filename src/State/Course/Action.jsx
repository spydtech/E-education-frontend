import axios from "axios";
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
    DELETE_COURSE_SUCCESS,
    DELETE_COURSE_FAILURE,
    SEARCH_COURSE_REQUEST,
    SEARCH_COURSE_SUCCESS,
    SEARCH_COURSE_FAILURE,
} from "./ActionType";
import { API_BASE_URL } from "../../Config/api";

const jwt = localStorage.getItem("jwt")

export const findCourses = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_COURSES_REQUEST });
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/admin/courses?`, { params: reqData });
        dispatch({ type: FIND_COURSES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_COURSES_FAILURE, payload: error.message });
    }
};

export const getAllCourses = () => async (dispatch) => {
    dispatch({ type: FIND_COURSES_REQUEST });
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/admin/courses/all`, {
            headers: {
                Authorization: `Bearer ${jwt}`, // Include your authentication token here
            },
        });
        console.log("Fetched courses data:", data);
        dispatch({ type: FIND_COURSES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_COURSES_FAILURE, payload: error.message });
    }
};

export const findCourseById = (courseId) => async (dispatch) => {
    dispatch({ type: FIND_COURSE_BY_ID_REQUEST });
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/admin/courses/id/${courseId}`);
        dispatch({ type: FIND_COURSE_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_COURSE_BY_ID_FAILURE, payload: error.message });
    }
};

export const searchCourse = (keyword) => async (dispatch) => {
    dispatch({ type: SEARCH_COURSE_REQUEST });
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/admin/courses/search`, { params: { q: keyword } });
        dispatch({ type: SEARCH_COURSE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SEARCH_COURSE_FAILURE, payload: error.message });
    }
};

export const createCourse = (courseData) => async (dispatch) => {
    dispatch({ type: CREATE_COURSE_REQUEST });
    try {
        const { data } = await axios.post(`${API_BASE_URL}/api/admin/courses/addCourse`, courseData);
        dispatch({ type: CREATE_COURSE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_COURSE_FAILURE, payload: error.message });
    }
};

export const updateCourse = (courseData) => async (dispatch) => {
    dispatch({ type: UPDATE_COURSE_REQUEST });
    try {
        const { data } = await axios.put(`${API_BASE_URL}/api/admin/courses/${courseData.id}`, courseData);
        dispatch({ type: UPDATE_COURSE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_COURSE_FAILURE, payload: error.message });
    }
};

export const deleteCourse = (courseId) => async (dispatch) => {
    dispatch({ type: DELETE_COURSE_REQUEST });
    try {
        await axios.delete(`${API_BASE_URL}/api/admin/courses/${courseId}/delete`);
        dispatch({ type: DELETE_COURSE_SUCCESS, payload: courseId });
    } catch (error) {
        dispatch({ type: DELETE_COURSE_FAILURE, payload: error.message });
    }
};
