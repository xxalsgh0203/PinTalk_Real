/* eslint-disable no-useless-escape */
export const NUMBER = 'number';
export const NUMBER_ENGLISH = 'numberWithEnglish';
export const NOT_NUMBER = 'not_number';
export default class ValidateForm {
  notNumberValid = (e) => {
    return (e.target.value = e.target.value.replace(/[^a-z|A-Z|ㄱ-ㅎ|가-힣]/g, ''));
  };

  numberValid = (e) => {
    return (e.target.value = e.target.value.replace(/\D/g, ''));
  };

  koreanValid = (e, name) => {
    this.notBlank(e, name);
    const checkKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
    return (e.target.value = e.target.value.replace(checkKorean, ''));
  };

  notBlank = (e) => {
    const checkBlank = /\s/g;
    return (e.target.value = e.target.value.replace(checkBlank, ''));
  };

  notSpecialString = (e) => {
    const regex = /[`~!@#$%^&*|\\\'\";:\?]/g;
    return (e.target.value = e.target.value.replace(regex, ''));
  };

  inputValid = (event, name, type) => {
    if (type === NOT_NUMBER) {
      this.notNumberValid(event);
    }
    if (type === NUMBER) {
      this.numberValid(event, name);
    }
    if (type === NUMBER_ENGLISH) {
      this.koreanValid(event, name);
    }
  };
}
