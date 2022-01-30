import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public items = [
    {
      title: 'title #1',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content platform.',
      icon: 'alarm'
    },
    {
      title: 'title #2',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content platform.',
      icon: 'home'
    },
    {
      title: 'title #3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content platform.',
      icon: 'shield'
    },
    {
      title: 'title #4',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content platform.',
      icon: 'square'
    },
    {
      title: 'title #5',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content platform.',
      icon: 'circle'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }
}
