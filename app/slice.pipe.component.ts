import { Component } from '@angular/core';


@Component({
    selector: 'slice-pipe',
    template: `
<h2>Slice Pipe Example</h2>
<p>{{str}} (0:4): {{str | slice:0:4}}</p>
<h4>names (1:4)</h4>
<ul>
<li *ngFor="let name of names | slice:1:4">{{name}}</li>
</ul>
`})
export class SlicePipe {
    str: string = "voidcanvas.com";
    names: string[] = ['paul', 'david', 'ean', 'renee', 'chloe']
}