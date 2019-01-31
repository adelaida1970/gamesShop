import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { CategoryComponent } from './category/category.component';
import { AviableComponent } from './aviable/aviable.component';
import { TodosComponent } from './todos/todos.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    TestComponent,
    CategoryComponent,
    AviableComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AutoCompleteModule,
    // import HttpClientModule after BrowserModule.
    AppRoutingModule,
    DataTablesModule
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
