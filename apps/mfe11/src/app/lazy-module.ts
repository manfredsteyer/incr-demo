
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib110Component } from '@my-workspace/lib110';
import { Lib111Component } from '@my-workspace/lib111';
import { Lib112Component } from '@my-workspace/lib112';
import { Lib113Component } from '@my-workspace/lib113';
import { Lib114Component } from '@my-workspace/lib114';
import { Lib115Component } from '@my-workspace/lib115';
import { Lib116Component } from '@my-workspace/lib116';
import { Lib117Component } from '@my-workspace/lib117';
import { Lib118Component } from '@my-workspace/lib118';
import { Lib119Component } from '@my-workspace/lib119';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp110',
      component: Lib110Component
    },

    {
      path: 'comp111',
      component: Lib111Component
    },

    {
      path: 'comp112',
      component: Lib112Component
    },

    {
      path: 'comp113',
      component: Lib113Component
    },

    {
      path: 'comp114',
      component: Lib114Component
    },

    {
      path: 'comp115',
      component: Lib115Component
    },

    {
      path: 'comp116',
      component: Lib116Component
    },

    {
      path: 'comp117',
      component: Lib117Component
    },

    {
      path: 'comp118',
      component: Lib118Component
    },

    {
      path: 'comp119',
      component: Lib119Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe11Module { }
