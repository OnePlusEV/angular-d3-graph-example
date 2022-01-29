import {Component, OnInit} from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './services';
import {SideNavService} from './services/side-nav.service';
import * as feather from 'feather-icons';

@Component({
  selector: 'cor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  constructor() {
    // const N = APP_CONFIG.N,
    //       getIndex = number => number - 1;

    /** constructing the nodes array */

    // for (let i = 1; i <= 5; i++) {
    //   for (let m = 2; i * m <= 5; m++) {
    //     /** increasing connections toll on connecting nodes */
    //     this.nodes[getIndex(i)].linkCount++;
    //     this.nodes[getIndex(i * m)].linkCount++;
    //
    //     /** connecting the nodes before starting the simulation */
    //     this.links.push(new Link(i, i * m));
    //   }
    // }
  }

  ngOnInit() {
    feather.replace();
  }
}
