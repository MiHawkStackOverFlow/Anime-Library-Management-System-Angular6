// angular libraries 
// Angular loads as a collection of JavaScript modules. You can think of them as library modules. Each Angular library name begins with the @angular prefix.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { ChangeDetectorRef, NgZone } from '@angular/core';

// created modules
import { AnimeModule } from './anime/anime.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from'./shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// no need to import spinner service because of providedIn flag

// created components
import { AppComponent } from './app.component';


// redux store
import { AnimeAppState, rootReducer, INITIAL_STATE } from './core/redux/store';

//iziToast
import { Ng2IziToastModule } from 'ng2-izitoast';

@NgModule({
  imports: [
    // external modules
    BrowserModule,
    BrowserAnimationsModule,
    NgReduxModule,
    Ng2IziToastModule,
    // app modules
    AnimeModule,
    AppRoutingModule,
    CoreModule,   
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<AnimeAppState>) {
     ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
