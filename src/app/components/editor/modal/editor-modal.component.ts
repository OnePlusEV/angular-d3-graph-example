import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {ForceDirectedGraph} from '../../../models';

@Component({
  selector: 'cor-editor-modal',
  templateUrl: './editor-modal.component.html',
  styleUrls: ['./editor-modal.component.css']
})
export class EditorModalComponent implements OnInit {

  public graph: ForceDirectedGraph;
  public source: number;
  public target: number;

  constructor(
    public dialogRef: MatDialogRef<EditorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      source,
      target
    },
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
