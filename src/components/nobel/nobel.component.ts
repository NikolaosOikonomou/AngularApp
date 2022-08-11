import { Component, OnInit } from '@angular/core';
import { Prize } from './nobelModel';
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
  errorMessage:string | undefined;
  showLoadingSpinner:boolean = false;

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: number[] = [10, 20, 30, 40];

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

  ShowClearBtn(){
    this.searchCategory ='';
    this.ngOnInit();
  }

  onTableDataChange(event: any){
    this.page = event;
    this.FilterByCategory();
  }

  onTableSizeChange(event: any): void{
    this.tableSize = event.target.value;
    
    this.page = 1;
    this.FilterByCategory();
  }
  
  constructor(private nobelService:NobelService) { }

  ngOnInit(): void {
    this.errorMessage = undefined;
    this.showLoadingSpinner = true;
    this.nobelService.GetNobel().subscribe(
    {
      next: response => {
        this.prizes = response.prizes;
        this.distinctCategories = [...new Set(this.prizes.map(x=>x.category))];
        this.filteredPrizes = this.prizes;
      },
      error: error => {this.errorMessage = `Opps Something went wrong, Error: ${error.status}`,this.showLoadingSpinner = false},
      complete: () => this.showLoadingSpinner = false
    });
  }

}
