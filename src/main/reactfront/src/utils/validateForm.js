export default class ValidateForm {
  notNumberValid = (e) => {
    const checkNumber = /[^0-9]/g;
    const isIncludeNumber = checkNumber.test(+e.target.value);
    console.log(isIncludeNumber);
    if (!isIncludeNumber) {
      return {
        message: '숫자를 제외 시켜주세요.',
      };
    }
  };

  numberValid = (e, name) => {
    if (e.target.value.toString().length > 6) return;
    this.checkBlank(e, name);
    return (e.target.value = e.target.value.replace(/\D/g, ''));
  };

  englishWithNumberValid = (e, name) => {
    this.checkBlank(e, name);
    return (e.target.value = e.target.value.replace(/[^A-Za-z0-9]/gi, ''));
  };

  checkPassword = (e, name) => {
    this.checkBlank(e, name);
    const checkSpecialString =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{2,20}$/;
    const isIncludeRegx = checkSpecialString.test(e.target.value);
    if (!isIncludeRegx) {
      return {
        message: '숫자,영문,특수문자를 포함해주세요.',
      };
    }
    if (e.target.value.length > 15) {
      return {
        message: '비밀 번호는 15자 이내로 작성해주세요',
      };
    }
  };

  checkBlank = (e) => {
    const checkBlank = /\s/g;
    if (e.target.value.match(checkBlank)) {
      return {
        message: '빈공간은 허용되지 않습니다.',
        isError: true,
      };
    }
    return;
  };
}
