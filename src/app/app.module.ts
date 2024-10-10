// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
// import { ComplaintsComponent } from './complaints/complaints.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';  // Import NavBarComponent
// import { appRoutes } from './app.routes';

// import { SideNavComponent } from './complaints/side-nav/side-nav.component';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';

// import { FormsModule } from '@angular/forms'; // Import FormsModule

// import { AddComplaintsComponent } from './complaints/add-complaints/add-complaints.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AddComplaintsComponent // Declare your component here
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule // Add FormsModule to the imports array
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })

// @NgModule({
//   declarations: [
//     AppComponent,
//     ComplaintsComponent,
//     NavBarComponent,  // Declare NavBarComponent here

//     SideNavComponent

//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot(appRoutes)
//   ],
//   providers: [
//     provideAnimationsAsync()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { AddComplaintsComponent } from './complaints/add-complaints/add-complaints.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'; // Import NavBarComponent
import { SideNavComponent } from './complaints/side-nav/side-nav.component';
import { appRoutes } from './app.routes';

// Angular Material Imports
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintsComponent,
    NavBarComponent,  // Declare NavBarComponent here
    AddComplaintsComponent, // Declare your component here
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, // Add FormsModule to the imports array
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
