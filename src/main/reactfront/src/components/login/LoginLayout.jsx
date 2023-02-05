const LoginLayout = ({ children }) => {
  return (
    <div className="px-4 2xl:px-0 flex justify-center items-center min-h-screen bg-gray-50">
      <div className="min-h-screen hidden 2xl:block 2xl:w-[50%] relative">
        <img
          className="absolute w-full h-full"
          src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHRvZ2V0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt="img"
        />
      </div>
      <div className="px-0 2xl:px-4 w-[35rem] 2xl:w-[50%]">{children}</div>
    </div>
  );
};
export default LoginLayout;
