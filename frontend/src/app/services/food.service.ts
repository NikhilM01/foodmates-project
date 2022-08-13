import { Injectable } from '@angular/core';
import { sample } from 'rxjs';
import { sample_food } from 'src/data';
import { food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():food[]{
    return sample_food;
  }
}
