import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PlaybarComponent } from './playbar/playbar.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        HomeComponent,
        MenuComponent,
        PlaybarComponent,
        ListComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NoopAnimationsModule,
        MatSliderModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class AppModule { }
