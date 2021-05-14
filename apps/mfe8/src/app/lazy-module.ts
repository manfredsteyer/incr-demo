
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib80Component } from '@my-workspace/lib80';
import { Lib81Component } from '@my-workspace/lib81';
import { Lib82Component } from '@my-workspace/lib82';
import { Lib83Component } from '@my-workspace/lib83';
import { Lib84Component } from '@my-workspace/lib84';
import { Lib85Component } from '@my-workspace/lib85';
import { Lib86Component } from '@my-workspace/lib86';
import { Lib87Component } from '@my-workspace/lib87';
import { Lib88Component } from '@my-workspace/lib88';
import { Lib89Component } from '@my-workspace/lib89';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp80',
      component: Lib80Component
    },

    {
      path: 'comp81',
      component: Lib81Component
    },

    {
      path: 'comp82',
      component: Lib82Component
    },

    {
      path: 'comp83',
      component: Lib83Component
    },

    {
      path: 'comp84',
      component: Lib84Component
    },

    {
      path: 'comp85',
      component: Lib85Component
    },

    {
      path: 'comp86',
      component: Lib86Component
    },

    {
      path: 'comp87',
      component: Lib87Component
    },

    {
      path: 'comp88',
      component: Lib88Component
    },

    {
      path: 'comp89',
      component: Lib89Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe8Module { }
