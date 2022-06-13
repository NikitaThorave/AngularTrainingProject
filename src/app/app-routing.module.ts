import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSettingReactiveFromComponent } from './Components/user-setting-reactive-from/user-setting-reactive-from.component';
import { ViewContainerRefCompComponent } from './Components/view-container-ref-comp/view-container-ref-comp.component';
import { NgTemplateOutletContextComponent } from './Components/ng-template-outlet-context/ng-template-outlet-context.component';
import { DemoDynamicCompComponent } from './Components/demo-dynamic-comp/demo-dynamic-comp.component';
import { RxjsSubjectComponent } from './Components/rxjs-subject/rxjs-subject.component';


@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
        redirectTo: 'forms',
        pathMatch: 'full',
      },
      {
        path: 'ReactiveForm',
        component: UserSettingReactiveFromComponent,
      },
      {
        path: 'View-Container-Ref',
        component: ViewContainerRefCompComponent,
      },
      {
        path: 'template-outlet',
        component: NgTemplateOutletContextComponent,
      },
      {
        path: 'dynamic-component',
        component: DemoDynamicCompComponent,
      },
      {
        path: 'rxjs-subject',
        component: RxjsSubjectComponent,
      },
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
