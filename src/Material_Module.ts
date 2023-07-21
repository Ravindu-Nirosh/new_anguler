import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@NgModule({
    exports:[
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule
    ]
})

export class MaterialModule{

}