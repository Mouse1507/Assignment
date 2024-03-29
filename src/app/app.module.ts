import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ContactComponent } from './contact/contact.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';
import { MainServiceService } from './main-service.service';
import { CountdownModule } from 'ngx-countdown';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    IntroduceComponent,
    ContactComponent,
    TestComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    CountdownModule,
    FormsModule,
    RouterModule.forRoot([
      {path : '',  component : HomeComponent},
      {path : 'home', component : HomeComponent},
      {path : 'login', component: LoginComponent},
      {path : 'signup', component:SignupComponent},
      {path : 'introduce', component : IntroduceComponent},
      {path : 'contact', component: ContactComponent},
      {path : 'test', component: TestComponent},
      {path : 'user', component: UserComponent},
    ])
  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
