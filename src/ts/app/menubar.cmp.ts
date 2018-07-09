import {Component} from "@angular/core"

/**
 * Menubar component doesn't implement any special logic to
 * handle displaying of dropdown menu. This behaviour comes from
 * bootstrap which was included in the third-parties.ts
 */
@Component({
    selector:'menu-bar',
    templateUrl:'./menubar.html'
})
export class MenuBar {

}