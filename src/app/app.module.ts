import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModules } from './materials';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FooterComponent } from './container/footer/footer.component';
import { NavbarComponent } from './container/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
