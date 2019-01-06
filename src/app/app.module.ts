import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { PortifolioComponent } from "./portifolio/portifolio.component";
import { SlideComponent } from "./slide/slide.component";
import { InicialComponent } from "./inicial/inicial.component";
import { ReactiveFormsModule } from "@angular/forms";
import { OmeqmComponent } from "./omeqm/omeqm.component";
import { BtdComponent } from "./btd/btd.component";

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    PortifolioComponent,
    SlideComponent,
    InicialComponent,
    OmeqmComponent,
    BtdComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
