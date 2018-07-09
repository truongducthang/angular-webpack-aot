import {NgModule} from "@angular/core"
import { AppCmp } from "./app.cmp";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
	imports:[BrowserModule],
	exports:[],
	declarations:[AppCmp],
	bootstrap: [AppCmp]
})
export class AppModule {

}