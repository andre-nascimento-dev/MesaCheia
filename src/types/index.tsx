import { ReactNode } from "react";
export interface ProviderData {
  children: ReactNode;
}
export interface AuthData {
  handleRegister: (data: User) => void;
  handleLogin: (data: Login) => void;
  token: string;
}
export interface AuthProviderData {
  children: ReactNode;
}
export interface Login {
  email: string;
  password: string;
}
export interface User {
  username: string;
  email: string;
  password: string;
  isMaster: boolean;
  avatar?: string;
  joinedTables: number[];
}
interface Player {
  username: string;
  avatar: string;
  isMaster: boolean;
  playerdId: number;
}
interface Table {
  userId: number;
  name: string;
  avatar: string;
  system: string;
  theme: string;
  discord: string;
  needMaster: boolean;
  masterId: number;
  total: number;
  isFull: boolean;
  players: Player[];
}
