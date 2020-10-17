import { SERVER_DOMAIN } from '../settings';

/** An abstract class for primary services that connects to the back-end. */
export class APIService {
  /*
   * Inserts the server domain in a given string.
   * @param {string} url - The string to attach the domain in.
   */
  putDomain(url: string) {
    return SERVER_DOMAIN + url;
  }
}
