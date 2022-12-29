const ApplyButton = () => {
  const handleNewWindow = () => {
    window.open('http://localhost:3000/loan/apply', '_blank', 'fullscreen');
  };
  return (
    <button
      onClick={handleNewWindow}
      className='mt-20 rounded-lg relative flex justify-center items-center overflow-hidden before:absolute before:translate-y-[100%] hover:before:bg-pink-600 before:w-full before:h-full hover:before:translate-y-0 before:transition-transform before:duration-500 px-4 before:px-4 py-1'
    >
      <span className='block text-white uppercase z-20'>pintalk 대출 신청</span>
    </button>
  );
};
export default ApplyButton;
