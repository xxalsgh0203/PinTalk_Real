import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../redux/slices/userReducer';

const useMembers = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userReducer);
  const pageSelector = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getList(pageSelector.page));
  }, [pageSelector.page]);

  return {
    users: userList.payload[0],
    loading: userList.loading,
    error: userList.error,
    totalPage: userList.payload[1]?.totalPage,
  };
};
export default useMembers;
