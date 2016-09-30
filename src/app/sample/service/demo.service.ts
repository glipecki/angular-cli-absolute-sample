import {Injectable} from '@angular/core';

@Injectable()
export class DemoService {

  constructor() {
  }

  hello(): string {
    return 'Demo service';
  }

}
