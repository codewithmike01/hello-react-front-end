const initialState = {
  message: {},
};

const FETCH_MESSAGE_SUCCESS = 'hello-rails-react/Message/FETCH_MESSAGE_SUCCESS';
const FETCH_MESSAGE_FAILURE = 'hello-rails-react/Message/FETCH_MESSAGE_FAILURE';

export const fetchMessageSuccess = (payload) => ({
  type: FETCH_MESSAGE_SUCCESS,
  payload,
});

export const fetchMessageFailure = (payload) => ({
  type: FETCH_MESSAGE_FAILURE,
  payload,
});

const greetings = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case FETCH_MESSAGE_FAILURE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return { ...state };
  }
};

export const fetchMessage = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/messages', {});
    const data = await response.json();
    dispatch(fetchMessageSuccess(data[0]));
  } catch {
    dispatch(fetchMessageFailure('Can not reach server'));
  }
};

export default greetings;
