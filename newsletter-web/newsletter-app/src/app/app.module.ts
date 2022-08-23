import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { NewsletterSubmissionComponent } from './newsletter-submission/newsletter-submission.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddUserComponent,
    UploadFileComponent,
    NewsletterSubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
