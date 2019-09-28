import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";

@NgModule({
    imports: [NativeScriptCommonModule, HomeRoutingModule, TNSFontIconModule],
    declarations: [HomeComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}
