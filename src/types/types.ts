export interface RobotStructure {
  id: string;
  name: string;
  url: string;
  specs: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
}

export type RobotsStructure = RobotStructure[];
