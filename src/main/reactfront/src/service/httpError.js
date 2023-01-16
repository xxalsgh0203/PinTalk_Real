export default class HttpError extends Error {
  #statusCode;
  constructor(statusCode, message) {
    super(message);
    this.#statusCode = statusCode;
  }

  get errorMessage() {
    switch (this.#statusCode) {
      case 400:
        this.message = '잘못된 요청입니다.';
        break;
      case 404:
        this.message = '페이지를 찾을 수 없습니다.';
        break;
      case 401:
        this.message = '인증이 필요합니다.';
        break;
      case 403:
        this.message = '허용되지 않는 요청입니다.';
        break;
      case 500:
        this.message = '내부 서버 오류';
      default:
        throw new Error('Unknown Error');
    }
    return this.message;
  }
}
