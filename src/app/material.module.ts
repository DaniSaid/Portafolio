import {NgModule} from '@angular/core';

 //componentes de angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}