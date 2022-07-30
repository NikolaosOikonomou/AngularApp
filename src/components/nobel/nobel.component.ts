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
  sortYear:boolean = true;

  FilterByCategory(){
    this.filteredPrizes = this.prizes;
    if(this.searchCategory){
      this.filteredPrizes = this.filteredPrizes.filter(x=>x.category.toUpperCase().includes(this.searchCategory.toUpperCase()));
    }
  }

  SortByYear(){
    this.sortYear = !this.sortYear;
    if(this.sortYear){
      this.filteredPrizes = this.filteredPrizes.sort((a,b)=> a.year > b.year ? -1:1);
    }
    else{
      this.filteredPrizes = this.filteredPrizes.sort((a,b)=> a.year < b.year ? -1:1);
    }
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
