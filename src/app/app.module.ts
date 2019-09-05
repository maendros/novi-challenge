import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { DetailsComponent } from "./components/details/details.component";
import { CollectionsComponent } from "./components/collections/collections.component";
import { HttpClientModule } from "@angular/common/http";
import { MoviesApiService } from "./services/movies-api.service";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlphanumericMinThreeCharactersDirective } from "./directives/alphanumeric-min-three-characters.directive";
import { ReactiveFormsModule } from "@angular/forms";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    CollectionsComponent,
    AlphanumericMinThreeCharactersDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [MoviesApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
