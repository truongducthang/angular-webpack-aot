import {Component} from "@angular/core"

@Component({
	selector: "app",
	templateUrl: "./app.html"
})
export class AppCmp {

	date() {
		return new Date().toString()
	}

}