import { Component, Input } from '@angular/core';
import { Node } from '../../../services';
import {SideNavService} from '../../../services/side-nav.service';

@Component({
  selector: '[cor-node]',
  templateUrl: 'node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {

  constructor(private sidenav: SideNavService) {
  }
  @Input('cor-node') node: Node;

  toggleSideNav(node) {
    this.sidenav.toggle(node);
  }
}
