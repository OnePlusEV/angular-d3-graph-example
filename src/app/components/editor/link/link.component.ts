import { Component, Input } from '@angular/core';
import { Link } from '../../../services';

@Component({
  selector: '[cor-link]',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @Input('cor-link') link: Link;
}
