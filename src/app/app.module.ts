import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { LivresComponent } from './livres/livres.component';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LivreService } from './services/livre.service';
import { AddLivreComponent } from './add-livre/add-livre.component';
import {ChipsModule} from 'primeng/chips';
import { FileUploadModule } from 'primeng/fileupload';
import { UpdateLivreComponent } from './update-livre/update-livre.component';


@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    AddLivreComponent,
    UpdateLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    ButtonModule,
    RatingModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    ChipsModule,
    ReactiveFormsModule,
    FileUploadModule

    
    

  ],
  providers: [LivreService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
