import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:food[]=[];
  constructor(private foodServices:FoodService) {
    this.foods = foodServices.getAll();
   }

  ngOnInit(): void {
  }

}
