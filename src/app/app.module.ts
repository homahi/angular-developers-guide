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
import { Transition2Component } from './transition2/transition2.component';
import { Transition3Component } from './transition3/transition3.component';
import { AnimationStyleComponent } from './animation-style/animation-style.component';
import { Style2Component } from './style2/style2.component';
import { AnimateComponent } from './animate/animate.component';
import { Animate2Component } from './animate2/animate2.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { GroupComponent } from './group/group.component';
import { SequenceComponent } from './sequence/sequence.component';
import { QueryComponent } from './query/query.component';
import { StaggerComponent } from './stagger/stagger.component';
import { AnimateChildComponent } from './animate-child/animate-child.component';
import { UseAnimationComponent } from './use-animation/use-animation.component';
import { ViewEncapsulationEmulatedComponent } from './view-encapsulation-emulated/view-encapsulation-emulated.component';
import { HostSelectorComponent } from './host-selector/host-selector.component';
import { SimpleDiComponent } from './simple-di/simple-di.component';


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
    State2Component,
    Transition2Component,
    Transition3Component,
    AnimationStyleComponent,
    Style2Component,
    AnimateComponent,
    Animate2Component,
    KeyframesComponent,
    GroupComponent,
    SequenceComponent,
    QueryComponent,
    StaggerComponent,
    AnimateChildComponent,
    UseAnimationComponent,
    ViewEncapsulationEmulatedComponent,
    HostSelectorComponent,
    SimpleDiComponent
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
