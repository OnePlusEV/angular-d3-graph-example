import {Component, ChangeDetectorRef, ChangeDetectionStrategy, OnInit, AfterViewInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {D3Service, ForceDirectedGraph, Node, Link} from '../../../services';
import {ModalComponent} from '../modal/modal.component';


@Component({
  selector: 'cor-graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit, AfterViewInit {
  nodes: Node[] = [];
  links: Link[] = [];

  public graph: ForceDirectedGraph;


  constructor(private d3Service: D3Service,
              private ref: ChangeDetectorRef,
              public dialog: MatDialog) {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {
        source: this.nodes,
        target: this.nodes,
      }
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.graph.connectNodes(result[0], result[1])
      }
      }
    );
  }

  // Конфигурация графа
  get options() {
    return {
      width: 800,
      height: 800
    };
  }
}
