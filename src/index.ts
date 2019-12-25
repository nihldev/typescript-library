/**
 * Checks if the given string is exactly "hello"
 *
 * @param helloString - String with a potential value of "hello"
 * @returns true if the given string is strictly "hello"; false otherwise
 */
export default (helloString: string): boolean =>
  helloString === "hello" ? true : false;
