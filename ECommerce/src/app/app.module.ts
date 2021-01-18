import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { EventsComponent } from './events/events.component';
import { sentenceCasePipe } from './sentencecase.pipe';
import { CapcthaService } from './captcha.service';
import { ApiData } from './apidata.service';
import { TemplateformComponent } from './templateform/templateform.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { DataService } from './data.service';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    EventsComponent,
    sentenceCasePipe,
    TemplateformComponent,
    SearchComponent,
    CategorylistComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CapcthaService, ApiData, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
