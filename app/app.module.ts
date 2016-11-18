import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent  } from './app.component';
//
import { DatePipe  } from './date.pipe.component';
//
import { DecimalPipe  } from './decimal.pipe.component';
//
import { LowerUpperCasePipe  } from './lower.uppercase.pipe.component';
//
import { JSONPipe  } from './json.pipe.component';
//
import { PercentPipe  } from './percent.pipe.component';
//
import { SlicePipe  } from './slice.pipe.component';

//
import { AsyncPipe  } from './async.pipe.component';









@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent ,
    DatePipe,
    DecimalPipe,
    LowerUpperCasePipe,
    JSONPipe,
    PercentPipe,
    SlicePipe,
    AsyncPipe
  ],
  providers: [
  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
