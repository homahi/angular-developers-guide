import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SampleService } from './sample.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { PipeComponent } from './pipe/pipe.component';
import { SelectorMyAppComponent } from './selector-my-app/selector-my-app.component';
import { SelectorComponent } from './selector-my-app/selector-my-app.component';
import { InputsComponent } from './inputs/inputs.component';
import { CounteColorDirective, CounterComponent } from './inputs/inputs.component';
import { OutputsCounterComponent, OutputsComponent } from './outputs/outputs.component';
import { ResizeComponent, ToggleColorComponent, HostComponent } from './host/host.component';
import { ExportAsCounterComponent, ExportAsComponent } from './export-as/export-as.component';
import { ProvidersComponent } from './providers/providers.component';
import { ViewProvidersContainerComponent, ContentChildComponent, ViewChildComponent, ViewProvidersComponent } from './view-providers/view-providers.component';
import { ChangeDetectionOnPushChildComponent, ChangeDetectionOnPushComponent } from './change-detection-on-push/change-detection-on-push.component';
import { QueriesViewChildComponent, QueriesChildComponent, QueriesContentChildComponent, QueriesComponent } from './queries/queries.component';
import { TemplateComponent } from './template/template.component';
import { StyleComponent } from './style/style.component';
import { AnimationComponent } from './animation/animation.component';
import { InputCounterComponent, CounterContainerComponent } from './counter-container/counter-container.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { CounterContainerWithSetterComponent, CounterWithSetterComponent } from './counter-with-setter/counter-with-setter.component';
import { HostDecoratorChildComponent,HostDecoratorComponent } from './host-decorator/host-decorator.component';
import { TransitionComponent } from './transition/transition.component';
import { StateComponent } from './state/state.component';
import { State2Component } from './state2/state2.component';


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
    NgForComponent,
    PipeComponent,
    SelectorMyAppComponent,
    SelectorComponent,
    InputsComponent,
    CounterComponent,
    CounteColorDirective,
    OutputsComponent,
    OutputsCounterComponent,
    HostComponent,
    ToggleColorComponent,
    ResizeComponent,
    ExportAsComponent,
    ExportAsCounterComponent,
    ProvidersComponent,
    ViewProvidersComponent,
    ViewProvidersContainerComponent,
    ViewChildComponent,
    ContentChildComponent,
    ChangeDetectionOnPushComponent,
    ChangeDetectionOnPushChildComponent,
    QueriesComponent,
    QueriesViewChildComponent,
    QueriesChildComponent,
    QueriesContentChildComponent,
    TemplateComponent,
    StyleComponent,
    AnimationComponent,
    InputCounterComponent,
    CounterContainerComponent,
    InterpolationComponent,
    CounterWithSetterComponent,
    CounterContainerWithSetterComponent,
    HostDecoratorComponent,
    HostDecoratorChildComponent,
    TransitionComponent,
    StateComponent,
    State2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [CalcService, SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
