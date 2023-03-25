import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule} from '@ng-bootstrap/ng-boostrap';
import { RouterModule } from '@angular/router';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'about', component: AboutComponent},
      {path:'services', component: ServicesComponent},
      {path: '**', component: PageNotFoundComponent}
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
