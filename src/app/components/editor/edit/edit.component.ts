import { Component, OnInit } from '@angular/core';

import {SideNavService} from '../../../services/side-nav.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public sidebarState: string;

  constructor(private sideNavService: SideNavService) { }

  ngOnInit(): void {
    this.sideNavService.sidebarStateObservable$
      .subscribe((newState: string) => {
        this.sidebarState = newState;
      });
  }

}
