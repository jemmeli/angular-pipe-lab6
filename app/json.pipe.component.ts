import {Component} from '@angular/core';
@Component({
    selector: 'json-pipe',
    template: `
        <h2>JSON Pipe Example</h2>
        <h4>Without JSON Pipe</h4>
        <pre>{{obj}}</pre>
        <h4>With JSON Pipe</h4>
        <pre>{{obj | json}}</pre>
`
})
export class JSONPipe {
    obj: Object = {
        name: {fName: "Mohamed", lName:"Romdhani"},
        site:"Ariana",
        luckyNumbers:[2,7,8]
    };
}