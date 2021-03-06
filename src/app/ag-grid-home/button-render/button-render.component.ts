

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-button-renderer',
  // template: `
  //   <button type="button" (click)="onClick($event)">{{label}}</button><br/>
  //   <a [routerLink]="['/movies', movie.imdbID]"></a>
  //   `
  templateUrl:'./button-render.component.html'
})

export class ButtonRenderComponent implements ICellRendererAngularComp {

  params : any;
  label!: string;

  agInit(params: any): void {
    this.params = params;
    this.label! = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event: any) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        // rowData: this.params.node.data
        rowData:this.params.node.data.id
        // ...something
      }
      //console.log(this.params.node.data.imdbID);
      this.params.onClick(params);

    }
  }
}
