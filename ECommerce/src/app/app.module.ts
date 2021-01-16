import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { EventsComponent } from './events/events.component';
import { sentenceCasePipe } from './sentencecase.pipe';
import { CapcthaService } from './captcha.service';
import { ApiData } from './apidata.service';
import { TemplateformComponent } from './templateform/templateform.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    EventsComponent,
    sentenceCasePipe,
    TemplateformComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    FormsModule
  ],
  providers: [CapcthaService, ApiData],
  bootstrap: [AppComponent]
})
export class AppModule { }
