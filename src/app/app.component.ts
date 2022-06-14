import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingServive } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(private authService: AuthService, private logginfService: LoggingServive){}
  
  ngOnInit(): void {
      this.authService.autoLogin();
      this.logginfService.printLog('Hello from AppComponent ngOnInit');
  }

}
