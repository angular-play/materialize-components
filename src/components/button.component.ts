import { Component, Input } from "@angular/core";

@Component({
    selector: "wave-button",
    template: `
        <a class="waves-effect waves-light btn {{color}}">
            <i class="material-icons left">{{icon}}</i>
            {{text}}
        </a>
    `
})
export class WaveButton {
    @Input() color: string = "blue lighten-2"
    @Input() icon: string = ""
    @Input() text: string = ""
}

@Component({
    selector: "float-button",
    template: `
        <a class="btn-floating btn {{color}}">
            <i class="material-icons left">{{icon}}</i>
            {{text}}
        </a>
    `
})
export class FloatButton {
    @Input() color: string = "blue lighten2"
    @Input() icon: string = ""
    @Input() text: string = ""
}