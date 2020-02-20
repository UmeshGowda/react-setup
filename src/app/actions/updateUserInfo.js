import C from './constants';

export default function updateUserInfo(data) {
    return dispatch => {
        dispatch({
            type: C.USER_INFO,
            payload: data
        });
    }
}
