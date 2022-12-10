export class Translate {
  q: string;
  source: string;
  target: string;
  format: string;


  constructor(
    q:string,
    source: string,
    target:string,
    format:string
  ) {
    this.q = q
    this.source = source
    this.target = target
    this.format = format
  }
}
