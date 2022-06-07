import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSettingReactiveFromComponent } from './Components/user-setting-reactive-from/user-setting-reactive-from.component';


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
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
