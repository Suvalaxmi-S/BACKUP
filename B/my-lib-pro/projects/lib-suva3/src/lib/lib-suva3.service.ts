import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibSuva3Service {
  constructor() {}
  name: string = 'suva';
  sampleSer() {
    return this.name;
  }
}
