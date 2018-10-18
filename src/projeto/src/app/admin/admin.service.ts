import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/messages/notification.service';

@Injectable()
export class AdminService {

  id: string;
  isOpen = false as boolean;
  formRestaurant: FormGroup;


  constructor(private http: HttpClient, private fb: FormBuilder,
    private router: Router, private message: NotificationService) {
    this.initForm()
  }

  newRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(`${MEAT_API}/restaurants`, restaurant)
  }
  saveMenuItens(menuItens: MenuItem): Observable<MenuItem> {
    return this.http.post<MenuItem>(`${MEAT_API}/menu`, menuItens)
  }



  initForm() {
    this.formRestaurant = this.fb.group({
      id: '',
      name: ['', Validators.required],
      category: ['', Validators.required],
      rating: 3.0,
      deliveryEstimate: ['', Validators.required],
      imagePath: '',
      about: ['', Validators.required],
      hours: ['', Validators.required],
      menu: this.fb.array([])
    });
  }
  get menu(): FormArray {
    return this.formRestaurant.get('menu') as FormArray;
  };

  saveMenuProducts() {
    this.menu.value.forEach(menu => {
      menu.restaurantId = this.id;
      this.saveMenuItens(menu)
        .subscribe();
    });
  }
  removeMenu(index: number) {
    this.menu.removeAt(index)
    this.message.notify('Produto do menu removido.')
  }
  newProduct() {
    this.isOpen = !this.isOpen;
  }

}
