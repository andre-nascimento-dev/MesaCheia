export interface Player {
  username: string;
  avatar: string;
  isMaster: boolean;
  playerdId: number;
}
export interface Table {
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
