
import { Component } from "@angular/core";
import {
    WaveButton,
    FloatButton,
    MD
} from "../src/controls";

@Component({
    selector: "app",
    templateUrl: "/app/app.component.html",
    directives: [MD, WaveButton, FloatButton]
})

export class AppComponent {

}