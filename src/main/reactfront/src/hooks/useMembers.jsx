import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../redux/slices/userReducer';

const useMembers = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getList());
  }, []);

  return {
    users: userList.payload[0],
    loading: userList.loading,
    error: userList.error,
  };
};
export default useMembers;
