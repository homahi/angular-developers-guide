import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { SimpleComponent } from './simple/simple.component';
import { UnderlineDirective } from './underline.directive';
import { SumComponent } from './sum/sum.component';
import { CalcService } from './calc.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgForComponent } from './ng-for/ng-for.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    TwoWayComponent,
    SimpleComponent,
    UnderlineDirective,
    SumComponent,
    ParentComponent,
    ChildComponent,
    NgStyleComponent,
    NgForComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [CalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
