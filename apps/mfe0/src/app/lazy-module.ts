
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib0Component } from '@my-workspace/lib0';
import { Lib1Component } from '@my-workspace/lib1';
import { Lib2Component } from '@my-workspace/lib2';
import { Lib3Component } from '@my-workspace/lib3';
import { Lib4Component } from '@my-workspace/lib4';
import { Lib5Component } from '@my-workspace/lib5';
import { Lib6Component } from '@my-workspace/lib6';
import { Lib7Component } from '@my-workspace/lib7';
import { Lib8Component } from '@my-workspace/lib8';
import { Lib9Component } from '@my-workspace/lib9';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp0',
      component: Lib0Component
    },

    {
      path: 'comp1',
      component: Lib1Component
    },

    {
      path: 'comp2',
      component: Lib2Component
    },

    {
      path: 'comp3',
      component: Lib3Component
    },

    {
      path: 'comp4',
      component: Lib4Component
    },

    {
      path: 'comp5',
      component: Lib5Component
    },

    {
      path: 'comp6',
      component: Lib6Component
    },

    {
      path: 'comp7',
      component: Lib7Component
    },

    {
      path: 'comp8',
      component: Lib8Component
    },

    {
      path: 'comp9',
      component: Lib9Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe0Module { }
