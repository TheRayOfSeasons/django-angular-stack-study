import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseComponent } from './components/case/case.component';
import { CasesComponent } from './components/cases/cases.component';
import { LongtestComponent} from './components/longtest/longtest.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseComponent,
    CasesComponent,
    LongtestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
