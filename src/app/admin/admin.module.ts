import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './admin-routing.module';
import { CategoriesComponent } from './categories/components/categories/categories.component';
import { CategoryFormComponent } from './categories/components/category-form/category-form.component';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [CategoriesComponent, CategoryFormComponent, NavComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CategoriesRoutingModule,
  ]
})
export class CategoriesModule { }