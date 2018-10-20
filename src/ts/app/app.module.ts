import {NgModule} from "@angular/core"
import { AppCmp } from "./app.cmp"
import { MenuBar } from "./menubar.cmp"
import { AppRouting } from "./app.routes"
import { HomeComponent } from "./home.cmp"
import { JQueryComponent } from "./jquery.cmp"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"

@NgModule({
	imports:[
		FormsModule,
		BrowserModule,
		AppRouting
	],
	exports:[MenuBar],
	declarations:[AppCmp, MenuBar, HomeComponent, JQueryComponent],
	bootstrap: [AppCmp]
})
export class AppModule {

}