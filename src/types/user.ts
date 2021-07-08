export interface User {
  username: string;
  email: string;
  password: string;
  isMaster: boolean;
  avatar: string;
  joinedTables: number[];
}
