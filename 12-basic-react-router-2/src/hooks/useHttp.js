import { useReducer, useCallback } from 'react';

const httpReducer = (state, action) => {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'completed',
    };
  }
  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'completed',
    };
  }
  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed',
    };
  }
  return state;
};

const useHttp = (requestFn, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFn(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error) {
        dispatch({ type: 'ERROR', errorMessage: error.message || 'something wrong' });
      }
    },
    [requestFn],
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
