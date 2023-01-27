import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserInfoData from './UserInfoData';
import Sidebar from './Sidebar';
const UserMemberDetail = () => {
  let { id } = useParams();

  const [userInfo, UpdateInfo] = useState({});

  // 데이터 받아와서 userInfo state 에 저장하기

  useEffect(() => {
    axios.get(`/userMemberDetail/${id}`).then((response) => {
      UpdateInfo(response.data);
    });
  }, []);

  // return <Sidebar userInfo={userInfo} />;
  return <UserInfoData userInfo={userInfo} />;
};

export default UserMemberDetail;
