class UserMember {
  list = async () => {
    const response = await axios.get('/erpMemberList').data;
    return response;
  };
}
