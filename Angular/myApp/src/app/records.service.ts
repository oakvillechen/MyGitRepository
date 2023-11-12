import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Lucas Chen", "E1234","lchen@gmail.com"]
  info2: string[] = ["Jolie Chen", "E1235","Jchen@gmail.com"]
  info3: string[] = ["Guodong Chen", "E1236","lchen@gmail.com"]

    getinfo1(): string[]{
      return this.info1
    }
    getinfo2(): string[]{
      return this.info2
    }
    getinfo3(): string[]{
      return this.info3
    }
  constructor() { }
}
