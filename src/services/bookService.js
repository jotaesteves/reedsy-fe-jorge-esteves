import HttpService from './httpService';

export default class BookService {

  static async getBook(slug) {
    return HttpService.get(`books/${slug}`);
  }

  static async getBooks() {
    return HttpService.get(`books/`);
  }

}

