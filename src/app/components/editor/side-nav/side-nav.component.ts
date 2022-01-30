import { Component, OnInit } from '@angular/core';
import {SideNavService} from '../../../services/side-nav.service';

@Component({
  selector: 'cor-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public nodeInfo;

  constructor(private sideNav: SideNavService) { }

  ngOnInit(): void {
    this.sideNav.sidebarStateObservable$.subscribe(() => {
      this.nodeInfo = this.sideNav.nodeInfo
    })
  }

  close() {
    this.sideNav.close();
  }

}
