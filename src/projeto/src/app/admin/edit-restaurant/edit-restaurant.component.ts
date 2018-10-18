import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../shared/messages/notification.service';
import { RestaurantsService } from '../../restaurants/restaurants.service';

@Component({
  selector: 'mt-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  constructor(public service: AdminService, private router: Router,
    private message: NotificationService, private route: ActivatedRoute,
    private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.getRestaurant()

    console.log(this.route.snapshot.params['id']);
    
  }

  save() {

  }
  getRestaurant() {
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(res => this.service.formRestaurant.patchValue(res))
  }

}
