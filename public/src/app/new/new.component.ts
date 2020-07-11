import { Component, OnInit} from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  newThing: any;
  errors = [];
  ngOnInit() {
    this.newThing = {
      title: '',
      price: '',
      image: ''
    }
  }

  createThing(){
    console.log("createThing started")
    this.errors = [];
    let obs = this._httpService.createThing(this.newThing);
    obs.subscribe(data => {
      if(data['results']){
        this._router.navigate(['/things']);
        // this.newThing = {
        //   title: '',
        //   price: '',
        //   image: ''
        // }
      }
      else if(data['errors']){
        for(var key in data['errors']){
          this.errors.push(data['errors'][key]['message']);
        }
      }
    })
  }

}
