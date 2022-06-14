import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingServive } from './logging.service';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule, 
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  providers: [LoggingServive]
})
export class AppModule { }
