import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-foodsearch',
  templateUrl: './foodsearch.component.html',
  styleUrls: ['./foodsearch.component.css']
})
export class FoodsearchComponent implements OnInit {
  searchForm:FormGroup;
  foods:any;
  array:any;
  constructor(
    private fb:FormBuilder,
    private foodService:FoodService

  ) { }

  ngOnInit() {
    this.searchForm= this.fb.group(
      {
        ingredients:['']
      }
    )
  }
  SearchFood(){
   console.log('ing',this.searchForm.value);
   this.foodService.addFood(this.searchForm.value).subscribe(
     (data)=>
     {
         this.foods=data.result
         console.log('result',this.foods.hints);
         this.array = this.foods.hints
     }
   )
   


  }

}
