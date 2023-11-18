export interface Credits {
  cast: Credit[],
  crew: Credit[]
}

export interface Credit {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  job: string;
}