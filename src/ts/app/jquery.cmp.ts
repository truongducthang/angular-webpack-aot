import {Component, ElementRef, AfterViewInit} from "@angular/core"
import * as $ from "jquery"

@Component({
	templateUrl: "./jquery.html"
})
export class JQueryComponent implements AfterViewInit{

    fromTimeEl : HTMLInputElement
    toTimeEl : HTMLInputElement

    selectedTimeRange: string

    constructor(private elRef : ElementRef) {
        
    }

    ngAfterViewInit() {
        $(".time-picker", this.elRef.nativeElement).timepicker({
            'showDuration': true,
            'timeFormat': 'H : i',
        });

        this.fromTimeEl = $(".time-picker.start", this.elRef.nativeElement)[0] as HTMLInputElement
        this.toTimeEl = $(".time-picker.end", this.elRef.nativeElement)[0] as HTMLInputElement

        $(".timepair", this.elRef.nativeElement).datepair()

        $(".timepair", this.elRef.nativeElement).on("rangeSelected", () => {

            this.selectedTimeRange = JSON.stringify({
                fromTime: this.fromTimeEl.value,
                toTime: this.toTimeEl.value
            });
        })
        
    }

    noinput(event : Event) {
        event.preventDefault()
        return false
    }

}