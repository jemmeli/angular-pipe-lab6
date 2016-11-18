import {Component} from '@angular/core';
@Component({
    selector: 'case-pipe',
    template: `
<h2>Lower and Upper case Pipe Example</h2>
<p>In lowerCase : {{str | lowercase}}</p>
<p>In uppercase : {{str | uppercase}}</p>
`
})
export class LowerUpperCasePipe {
    str: string = "My name is Paul Shan";
}