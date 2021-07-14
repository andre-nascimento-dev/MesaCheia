export interface Player {
  username?: string;
  avatar?: string;
  isMaster: boolean;
  playerId: number;
}
export interface Table {
  userId: number;
  name: string;
  avatar: string;
  system: string;
  theme: string;
  discord: string;
  needMaster: boolean;
  masterId: number | null;
  total: number;
  isFull: boolean;
  players: Player[];
  id?: number;
}
