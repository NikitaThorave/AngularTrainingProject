import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSettingReactiveFromComponent } from './Components/user-setting-reactive-from/user-setting-reactive-from.component';
import { ViewContainerRefCompComponent } from './Components/view-container-ref-comp/view-container-ref-comp.component';
import { NgTemplateOutletContextComponent } from './Components/ng-template-outlet-context/ng-template-outlet-context.component';
import { DemoDynamicCompComponent } from './Components/demo-dynamic-comp/demo-dynamic-comp.component';
import { SuccessToastComponent } from './Components/success-toast/success-toast.component';
import { ErrorToastComponent } from './Components/error-toast/error-toast.component';
import { WarningToastComponent } from './Components/warning-toast/warning-toast.component';
import { PingComponent } from './Components/ping/ping.component';
import { PongComponent } from './Components/pong/pong.component';
import { RxjsSubjectComponent } from './Components/rxjs-subject/rxjs-subject.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingReactiveFromComponent,
    ViewContainerRefCompComponent,
    NgTemplateOutletContextComponent,
    DemoDynamicCompComponent,
    SuccessToastComponent,
    ErrorToastComponent,
    WarningToastComponent,
    PingComponent,
    PongComponent,
    RxjsSubjectComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
