import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `
     <date-pipe></date-pipe>
     <decimal-pipe></decimal-pipe>
     <case-pipe></case-pipe>
     <json-pipe></json-pipe>
     <percent-pipe></percent-pipe>
     <slice-pipe></slice-pipe>
     <async-pipe></async-pipe>
`
})
export class AppComponent  {
}
