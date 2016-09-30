/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from 'app/layout/header/header.component';
import {DemoService} from 'app/sample/service/demo.service';

describe('Component: Header', () => {
  it('should create an instance', () => {
    let component = new HeaderComponent(new DemoService());
    expect(component).toBeTruthy();
  });
});
