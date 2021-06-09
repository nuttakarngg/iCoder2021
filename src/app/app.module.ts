import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { Mar4jai3Component } from './mar4jai3/mar4jai3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { TableModule } from 'primeng/table';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { NotfoundComponent } from './notfound/notfound.component';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { CalendarModule } from 'primeng/calendar';
import { PokemonGoComponent } from './pokemon-go/pokemon-go.component';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    Mar4jai3Component,
    StudentComponent,
    AddStudentComponent,
    HomeComponent,
    PokemonComponent,
    NotfoundComponent,
    EditstudentComponent,
    PokemonGoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    CalendarModule,
    DropdownModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
