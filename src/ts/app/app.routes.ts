import {NgModule} from "@angular/core"
import { Routes, RouterModule } from "@angular/router";
import { AppCmp } from "./app.cmp";
import { HomeComponent } from "./home.cmp";
import { JQueryComponent } from "./jquery.cmp";

const routes : Routes = [
    {path:"", component:HomeComponent, pathMatch:"full"},
    {path:"lazy", loadChildren:"./lazy/lazy.module#LazyModule"},
    {path:"jquery", component:JQueryComponent, pathMatch:"full"}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouting {

}