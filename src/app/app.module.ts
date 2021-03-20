import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewEmailsPageComponent } from './view-emails-page/view-emails-page.component';

import { RegisterPageComponent } from './register-page/register-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ViewEmailsPageComponent,
    RegisterPageComponent,
    ToolbarComponent,
    SidebarComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
