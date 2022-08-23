import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { NewsletterSubmissionComponent } from './newsletter-submission/newsletter-submission.component';

const routes: Routes = [
	{path: 'usersList' , component: UsersListComponent},
    {path: 'addUser' , component: AddUserComponent},
    {path: 'uploadFile' , component: UploadFileComponent},
    {path: 'submission' , component: NewsletterSubmissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
