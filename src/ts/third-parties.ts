import "bootstrap"
import * as $ from "jquery"

(function($ : any) {
    window["jQuery"] = $

	// we need to ensure jquery is imported and available before requiring these JQuery UI library
    require("timepicker")
    require("datepair.js/dist/datepair")
    require("datepair.js/dist/jquery.datepair")

})($)