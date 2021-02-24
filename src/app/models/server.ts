export interface IServer {
  id: string;
  name: string;
  description: string;
  status: IServerStatus;
}

export interface IServerStatus {
  state: 'POWERED_OFF' | 'POWERED_ON';
  percent: number;
}
