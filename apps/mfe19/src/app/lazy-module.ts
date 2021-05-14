
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib190Component } from '@my-workspace/lib190';
import { Lib191Component } from '@my-workspace/lib191';
import { Lib192Component } from '@my-workspace/lib192';
import { Lib193Component } from '@my-workspace/lib193';
import { Lib194Component } from '@my-workspace/lib194';
import { Lib195Component } from '@my-workspace/lib195';
import { Lib196Component } from '@my-workspace/lib196';
import { Lib197Component } from '@my-workspace/lib197';
import { Lib198Component } from '@my-workspace/lib198';
import { Lib199Component } from '@my-workspace/lib199';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp190',
      component: Lib190Component
    },

    {
      path: 'comp191',
      component: Lib191Component
    },

    {
      path: 'comp192',
      component: Lib192Component
    },

    {
      path: 'comp193',
      component: Lib193Component
    },

    {
      path: 'comp194',
      component: Lib194Component
    },

    {
      path: 'comp195',
      component: Lib195Component
    },

    {
      path: 'comp196',
      component: Lib196Component
    },

    {
      path: 'comp197',
      component: Lib197Component
    },

    {
      path: 'comp198',
      component: Lib198Component
    },

    {
      path: 'comp199',
      component: Lib199Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe19Module { }
