import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowCounterComponent } from './show-counter/show-counter.component';
import { EditCounterComponent } from './edit-counter/edit-counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ShowCounterComponent, EditCounterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
