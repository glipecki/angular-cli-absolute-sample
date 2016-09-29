import { Component, OnInit } from '@angular/core';
import {DemoService} from 'app/sample/service/demo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private msg:string;

  constructor(private demoService:DemoService) { }

  ngOnInit() {
    this.msg = this.demoService.hello();
  }

}
