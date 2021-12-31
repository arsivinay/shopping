import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannersComponent } from './components/banners/banners.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { item } from './components/item/items';
import { CatagoryComponent } from './components/forms/catagory/catagory.component';
import { FormsComponent } from './components/forms/forms.component';
import { ItemDescriptionComponent } from './components/forms/item-description/item-description.component';

import { FormsModule } from '@angular/forms';
import { AddItemComponent } from './components/forms/add-item/add-item.component';
import { SubCatagoryComponent } from './components/forms/sub-catagory/sub-catagory.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannersComponent,
    SignUpPageComponent,
    HomeComponent,
    LoginPageComponent,
    item,
    ItemDescriptionComponent,
    CatagoryComponent,
    FormsComponent,
    AddItemComponent,
    SubCatagoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
