import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ForceDirectedGraph } from '../../models';

@Component({
  selector: 'cor-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public graph: ForceDirectedGraph;
  public source: number;
  public target: number;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      source,
      target
    },
  ) {}

  ngOnInit(): void {
  }

  addLink() {
   // this.graph.connectNodes(this.source, this.target)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
