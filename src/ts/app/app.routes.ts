import {NgModule, Type} from "@angular/core"
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.cmp";
import { JQueryComponent } from "./jquery.cmp";


export const routes : Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component:HomeComponent, pathMatch:"full"},
    {path:"lazy", loadChildren:"./lazy/lazy.module#LazyModule"},
    {path:"jquery", component:JQueryComponent, pathMatch:"full"}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouting {

}