export default interface AuthInterface {
  authenticated: boolean;
  email: string;
  displayName: string;
  token: string;
  uid: string;
}
