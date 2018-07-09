import {NgModule} from "@angular/core"
import { AppCmp } from "./app.cmp"
import { BrowserModule } from "@angular/platform-browser"
import { MenuBar } from "./menubar.cmp"
import {RouterModule} from "@angular/router"
import { AppRouting } from "./app.routes"
import { HomeComponent } from "./home.cmp"
import { JQueryComponent } from "./jquery.cmp"

@NgModule({
	imports:[
		BrowserModule, RouterModule, 
		AppRouting
	],
	exports:[MenuBar],
	declarations:[AppCmp, MenuBar, HomeComponent, JQueryComponent],
	bootstrap: [AppCmp]
})
export class AppModule {

}