import {Component} from '@angular/core';
@Component({
    selector: 'date-pipe',
    template: `
        <h2>Pipe Example</h2>
        <h3>DatePipe</h3>
        <h4>1. Today is {{today}}</h4>
        <h4>2. Today is {{today | date}}</h4>
        <h4>3. Today is {{today | date:"dd/MM/yyyy"}}</h4>
        <h4>3. Today is {{today | date:"mediumDate"}}</h4>
        <h4>3. Today is {{today | date:"shortTime"}}</h4>
        `
})
export class DatePipe {
    today = new Date();
}