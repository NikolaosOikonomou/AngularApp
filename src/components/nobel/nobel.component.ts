import { Component, OnInit } from '@angular/core';
import { Nobel,Prize } from './nobelModel';
import { NobelService } from './nobel.service';

@Component({
  selector: 'app-nobel',
  templateUrl: './nobel.component.html',
  styleUrls: ['./nobel.component.css']
})
export class NobelComponent implements OnInit {

  prizes!:Array<Prize>;
  filteredPrizes!:Array<Prize>;
  distinctCategories!:Array<string>;
  searchCategory!:string;
  FilterByCategory(){
    this.filteredPrizes = this.prizes;
    if(this.searchCategory){
      this.filteredPrizes = this.filteredPrizes.filter(x=>x.category.toUpperCase().includes(this.searchCategory.toUpperCase()));
    }
   
    console.log(this.filteredPrizes);
  }
  
  constructor(private nobelService:NobelService) { }

  ngOnInit(): void {
   this.nobelService.GetNobel().subscribe(
    {
      next: response => {
        this.prizes = response.prizes;
        this.distinctCategories = [...new Set(this.prizes.map(x=>x.category))];
        this.filteredPrizes = this.prizes;
      },
      error: err => console.log(err),
      complete: () => console.log("Done")
    });
  }

}
