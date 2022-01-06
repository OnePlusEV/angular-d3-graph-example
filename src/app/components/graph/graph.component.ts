import {Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit} from '@angular/core';
import {D3Service, ForceDirectedGraph, Node, Link} from '../../services';

@Component({
  selector: 'cor-graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit, AfterViewInit {
  @Input() nodes: Node[];
  @Input() links: Link[];

  public graph: ForceDirectedGraph;

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.graph.initSimulation(this.options);
  // }


  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {

    // Рендер графа
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

    // Симуляция
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  addNode() {
    this.nodes.push(new Node(this.nodes.length))
  }

  addLink() {
    this.graph.connectNodes(1, 2)
  }

  // Конфигурация графа
  get options() {
    return {
      width: 800,
      height: 800
    };
  }
}
