import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserMemberDetail = () => {
  let { id } = useParams();

  axios.get(`/userMemberDetail/${id}`).then((response) => {
    console.log(response.data);
  });

  return <>현재 가져온 아이디는 {id} 입니다</>;
};

export default UserMemberDetail;
