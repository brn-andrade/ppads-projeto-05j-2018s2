import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { Restaurant } from '../../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private service: RestaurantsService) { }

  ngOnInit() {
    this.fetch()
  }

  fetch() {
    this.service.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

}
