import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
@NgModule({
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        TNSFontIconModule.forRoot({
            fa: "./fa-5.css"
        })
    ],
    declarations: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
