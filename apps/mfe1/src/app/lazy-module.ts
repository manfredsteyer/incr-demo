
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib10Component } from '@my-workspace/lib10';
import { Lib11Component } from '@my-workspace/lib11';
import { Lib12Component } from '@my-workspace/lib12';
import { Lib13Component } from '@my-workspace/lib13';
import { Lib14Component } from '@my-workspace/lib14';
import { Lib15Component } from '@my-workspace/lib15';
import { Lib16Component } from '@my-workspace/lib16';
import { Lib17Component } from '@my-workspace/lib17';
import { Lib18Component } from '@my-workspace/lib18';
import { Lib19Component } from '@my-workspace/lib19';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp10',
      component: Lib10Component
    },

    {
      path: 'comp11',
      component: Lib11Component
    },

    {
      path: 'comp12',
      component: Lib12Component
    },

    {
      path: 'comp13',
      component: Lib13Component
    },

    {
      path: 'comp14',
      component: Lib14Component
    },

    {
      path: 'comp15',
      component: Lib15Component
    },

    {
      path: 'comp16',
      component: Lib16Component
    },

    {
      path: 'comp17',
      component: Lib17Component
    },

    {
      path: 'comp18',
      component: Lib18Component
    },

    {
      path: 'comp19',
      component: Lib19Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe1Module { }
