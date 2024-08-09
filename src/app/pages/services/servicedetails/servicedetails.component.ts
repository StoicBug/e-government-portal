import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrl: './servicedetails.component.css'
})
export class ServicedetailsComponent {
  id:string|null
  constructor(private router:ActivatedRoute) {
    this.id = this.router.snapshot.paramMap.get('id')
  }

}
