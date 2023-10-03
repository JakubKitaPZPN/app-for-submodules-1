import {Component, OnInit} from '@angular/core';
import {convertKgToLbs} from "../../libs/styled-input/helpers/units";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-for-submodules-1';

  ngOnInit() {
    console.log(this.getSize());
  }

  private getSize(): number {
    return convertKgToLbs(23);
  }

}
