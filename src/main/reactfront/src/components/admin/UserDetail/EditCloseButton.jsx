const EditCloseButton = () => {
  return (
    <>
      <button
        className="px-4 py-2 text-white-800  rounded-lg bg-opacity-50 hover:bg-stone-200 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10 w-[30%] md:w-[15%] lg:w-[10%] bg-pintalk-light-yellow"
        id="edit"
      >
        수정
      </button>

      <button
        className="px-4 py-2 text-white-800  rounded-lg bg-opacity-50 hover:bg-stone-200 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10 w-[30%] md:w-[15%] lg:w-[10%] bg-pintalk-dark-yellow"
        type="close"
        onClick={window.close}
      >
        닫기
      </button>
    </>
  );
};

export default EditCloseButton;
