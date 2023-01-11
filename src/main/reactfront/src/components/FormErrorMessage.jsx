const FormErrorMessage = ({ errorMessage }) => {
  return (
    <div>
      <span className="text-sm text-teal-400 font-bold mx-2">{`* ${errorMessage}`}</span>
    </div>
  );
};

export default FormErrorMessage;
