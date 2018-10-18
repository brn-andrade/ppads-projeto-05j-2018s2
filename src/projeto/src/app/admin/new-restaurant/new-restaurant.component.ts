import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../shared/messages/notification.service';

@Component({
  selector: 'mt-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {

  constructor(public service: AdminService, private router: Router, private message: NotificationService) { }

  ngOnInit() { }

  save() {
    const data = this.service.formRestaurant.value;
    if (!data.imagePath) {
      data.imagePath = 'assets/img/404.png'
    }
    data.menu = undefined;

    this.service.newRestaurant(this.service.formRestaurant.value)
      .subscribe(response => {
        this.service.id = response.id;
        this.service.saveMenuProducts();
        this.message.notify('Restaurante salvo com sucesso.')
        this.router.navigate(['/restaurants'])
      })
  }

}
