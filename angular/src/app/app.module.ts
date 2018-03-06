import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component'
import {NavigationComponent} from './navigation/navigation.component'
import {SessionViewComponent} from './session/session-view.component'
import {SessionTableComponent} from './session/session-table.component'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavigationComponent,
        SessionViewComponent,
        SessionTableComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
