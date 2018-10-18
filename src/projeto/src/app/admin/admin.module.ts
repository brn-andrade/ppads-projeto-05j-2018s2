import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { AdminService } from './admin.service';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { NewMenuComponent } from './new-menu/new-menu.component';

const ROUTES: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', component: IndexComponent },
      { path: 'novo', component: NewRestaurantComponent },
      { path: 'restaurantes-listagem', component: RestaurantsListComponent },
      { path: 'editar/:id', component: EditRestaurantComponent },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    AdminComponent,
    NewRestaurantComponent,
    IndexComponent,
    NewMenuComponent,
    RestaurantsListComponent,
    RestaurantFormComponent,
    EditRestaurantComponent
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
