import { Component, Input } from '@angular/core';
import { Node } from '../../services';

@Component({
  selector: '[cor-node]',
  templateUrl: 'node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
  @Input('cor-node') node: Node;
}
