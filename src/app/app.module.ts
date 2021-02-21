import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app.routing.module'
import { FormsModule } from '@angular/forms'
import { Ng5SliderModule } from 'ng5-slider'
import { HttpClientModule } from '@angular/common/http'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'

//DIRECTIVES
import { NgInitDirective } from './init/init.directive'

// COMPONENTS
import { Splash } from './splash/splash.component'
import { CardComponent } from './card/card.component'
import { VolumeComponent } from './volume/volume.component'
import { CartridgeComponent } from './cartridge/cartridge.component'
import { WindowComponent } from './window/window.component'
import { ContextComponent } from './context/context.component'
import { CollectionComponent } from './collection/collection.component'

@NgModule({
  declarations: [
    NgInitDirective,
    Splash,
    CardComponent,
    VolumeComponent,
    CartridgeComponent,
    WindowComponent,
    ContextComponent,
    CollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng5SliderModule,
    HttpClientModule,
    SocketIoModule,
  ],
  providers: [],
  bootstrap: [CartridgeComponent]
})
export class AppModule { }
