import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomepage = () => {
    navigate('/');
  };
  return (
    <div className="h-screen bg-gray-700 flex flex-col items-center justify-center">
      <div className="space-y-3 text-pintalk-dark-yellow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">페이지를 찾을 수 없습니다.</h1>
        <h3 className="text-xl">404 Error</h3>
      </div>
      <button
        onClick={onHomepage}
        className="mt-10 bg-pintalk-dark-brown rounded-lg p-2 px-4 text-pintalk-light-yellow text-lg hover:bg-pintalk-light-yellow hover:text-pintalk-dark-brown transition-all font-bold"
      >
        홈으로 가기
      </button>
    </div>
  );
};
export default NotFound;
