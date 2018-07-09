import {NgModule} from "@angular/core"
import { LazyRouting } from "./lazy.routes";
import { LazyComponent } from "./lazy.cmp";

@NgModule({
	providers: [],
	imports: [ LazyRouting ],
	exports: [],
	declarations: [LazyComponent]
})
export class LazyModule {

}