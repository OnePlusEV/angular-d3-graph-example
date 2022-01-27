import APP_CONFIG from '../app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  label: string;

  id: string;
  linkCount: number = 0;
  links: Array<Number> = [];

  constructor(id) {
    this.id = id;
    this.label = id
    this.x = 0;
    this.y = 0;
    this.vx = 200;
    this.vy = 200;
    // this.fx = 400;
    // this.fy = 400;
  }
}
