export default class ValidateForm {
  notNumberValid = (e) => {
    return (e.target.value = e.target.value.replace(
      /[^a-z|A-Z|ㄱ-ㅎ|가-힣]/g,
      ''
    ));
  };

  numberValid = (e, name) => {
    if (e.target.value.toString().length > 6) return;
    this.checkBlank(e, name);
    return (e.target.value = e.target.value.replace(/\D/g, ''));
  };

  koreanValid = (e, name) => {
    this.checkBlank(e, name);
    const checkKorean = /[ㄱ-ㅎ|가-힣]/g;
    const isIncludeKorean = checkKorean.test(e.target.value);
    if (isIncludeKorean) {
      return {
        message: '영문 숫자만 가능합니다.',
      };
    }
  };

  checkPassword = (e, name) => {
    this.checkBlank(e, name);
    const checkSpecialString =
      /^(?=.*[a-zA-Z])(?=.*[!~@#$%^*+=-])(?=.*[0-9]).{2,20}$/;
    const isIncludeRegx = checkSpecialString.test(e.target.value);
    if (!isIncludeRegx) {
      return {
        message: '숫자,영문,특수문자(!~@#$%^*+=-)를 포함해주세요.',
      };
    }
    /*  if (e.target.value.includes(' ')) {
      return {
        message: '빈공간을 제거해주세요.',
      };
    } */
    if (e.target.value.length < 8) {
      return {
        message: '8자이상 입력해주세요.',
      };
    }
  };

  checkBlank = (e) => {
    const checkBlank = /\s/g;
    const currentValue = e.target.value;
    if (currentValue.match(checkBlank) || currentValue.includes(' ')) {
      return {
        message: '빈공간은 허용되지 않습니다.',
      };
    }
    return;
  };
}
