import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../redux/slices/userSlice';

const useMembers = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userSlice);
  const pageSelector = useSelector((state) => state.userSlice);
  const userStatusSelector = useSelector((state) => state.userSlice);

  const userListArgs = {
    page: pageSelector.page,
    status: userStatusSelector.status,
  };

  useEffect(() => {
    dispatch(getList(userListArgs));
  }, [pageSelector.page, userStatusSelector.status]);

  return {
    users: userList.payload[0],
    loading: userList.loading,
    error: userList.error,
    PageInfo: userList.payload[1],
  };
};
export default useMembers;
