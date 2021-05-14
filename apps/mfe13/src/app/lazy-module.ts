
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib130Component } from '@my-workspace/lib130';
import { Lib131Component } from '@my-workspace/lib131';
import { Lib132Component } from '@my-workspace/lib132';
import { Lib133Component } from '@my-workspace/lib133';
import { Lib134Component } from '@my-workspace/lib134';
import { Lib135Component } from '@my-workspace/lib135';
import { Lib136Component } from '@my-workspace/lib136';
import { Lib137Component } from '@my-workspace/lib137';
import { Lib138Component } from '@my-workspace/lib138';
import { Lib139Component } from '@my-workspace/lib139';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp130',
      component: Lib130Component
    },

    {
      path: 'comp131',
      component: Lib131Component
    },

    {
      path: 'comp132',
      component: Lib132Component
    },

    {
      path: 'comp133',
      component: Lib133Component
    },

    {
      path: 'comp134',
      component: Lib134Component
    },

    {
      path: 'comp135',
      component: Lib135Component
    },

    {
      path: 'comp136',
      component: Lib136Component
    },

    {
      path: 'comp137',
      component: Lib137Component
    },

    {
      path: 'comp138',
      component: Lib138Component
    },

    {
      path: 'comp139',
      component: Lib139Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe13Module { }
