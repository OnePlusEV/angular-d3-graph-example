import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  private sidebarState = null;
  public nodeInfo = null;
  private sidebarStateChanged$ = new BehaviorSubject<string>(this.sidebarState);
  public sidebarStateObservable$ = this.sidebarStateChanged$.asObservable();

  constructor() {
    this.sidebarStateChanged$.next(null);
  }
  toggle(node) {
    // this.sidebarState = this.sidebarState === 'open' ? 'close' : 'open';
    this.sidebarState = node;
    this.nodeInfo = node;
    console.log(node)
    this.sidebarStateChanged$.next(this.sidebarState);
  }

  close() {
    this.sidebarStateChanged$.next(null);
  }

}
