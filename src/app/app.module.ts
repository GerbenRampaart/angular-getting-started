import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";

import {
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from "./products/product-detail.component";
import { WelcomeComponent } from "./home/welcome.component";

import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "./products/product-detail.guard";
import { ProductModule } from "./products/product.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "welcome",
        component: WelcomeComponent
      },
      {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full"
      },
      {
        path: "**",
        redirectTo: "welcome",
        pathMatch: "full"
      }
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
