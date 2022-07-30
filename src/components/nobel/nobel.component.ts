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
  
  constructor(private nobelService:NobelService) { }

  ngOnInit(): void {
   this.nobelService.GetNobel().subscribe(
    {
      next: response => this.prizes = response.prizes,
      error: err => console.log(err),
      complete: () => console.log("Done")
    });
  }

}
