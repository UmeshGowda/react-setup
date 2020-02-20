import C from '../../actions/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case C.USER_INFO:
            return action.payload
        default:
            return state
    }
}
