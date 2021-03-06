import { Component, OnInit } from '@angular/core';

@Component({	
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [
  	'./user-profile.component.css',
  	'../../assets/css/bootstrap.min.css',
  	'../../assets/css/themify-icons.css',
  	'../../assets/css/simple-line-icons.css',
  	'../../assets/css/font-awesome.min.css',
  	'../../assets/css/jquery-ui.min.css',
  	'../../assets/css/magnific-popup.css',
  	'../../assets/css/jquery.bxslider.css',
  	'../../assets/css/style.css',
  	'../../assets/css/responsive.css'
  	]
})
export class UserProfileComponent implements OnInit {
	clickMessage = '';
	constructor() { }

	ngOnInit() {

	}
	onClickMe(){
		this.clickMessage = "Not yet Implemented";
		alert(this.clickMessage);
		return false;
	}

}
