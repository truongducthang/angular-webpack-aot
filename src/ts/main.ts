import "zone.js/dist/zone"
import './third-parties'

import {platformBrowser} from "@angular/platform-browser"
import {enableProdMode} from "@angular/core"

declare var require:any;

async function bootstrapProd() {

    const MainModuleNgFactory = require("./app/app.module.ngfactory").AppModuleNgFactory
    
    enableProdMode()

    platformBrowser().bootstrapModuleFactory(MainModuleNgFactory)
        .catch(err => console.log(err))


}

bootstrapProd();