import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularTrainingProject';
  isLoggedIn = false;
  email = '';

  ngOnInit(): void {
    console.log('VK: APP COMPONENT : ngOnInit');

    this.email = window.localStorage.getItem('email') || '';
    this.isLoggedIn = !!window.localStorage.getItem('token');
  }

  onSignout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('email');
    //this.router.navigateByUrl('/signin');
  }
}
