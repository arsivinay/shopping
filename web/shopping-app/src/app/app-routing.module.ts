import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoryComponent } from './components/forms/catagory/catagory.component';
import { ItemDescriptionComponent } from './components/forms/item-description/item-description.component';
import { SubCatagoryComponent } from './components/forms/sub-catagory/sub-catagory.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: 'signUpPage', component: SignUpPageComponent },
  {path:'loginPage' , component:LoginPageComponent},
  {path:'',component:HomeComponent},
  {path:'itemDescription',component:ItemDescriptionComponent},
  {path:'catagory',component:CatagoryComponent},
  {path:'subCatagory',component:SubCatagoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
