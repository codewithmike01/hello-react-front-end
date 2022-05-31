import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/Greetings/greetings';

function Greetings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  const { message } = useSelector((state) => state.message_text);

  return (
    <div>
      <h1>
        {' '}
        {message.text}
      </h1>
    </div>
  );
}

export default Greetings;
