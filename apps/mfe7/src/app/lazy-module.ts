
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib70Component } from '@my-workspace/lib70';
import { Lib71Component } from '@my-workspace/lib71';
import { Lib72Component } from '@my-workspace/lib72';
import { Lib73Component } from '@my-workspace/lib73';
import { Lib74Component } from '@my-workspace/lib74';
import { Lib75Component } from '@my-workspace/lib75';
import { Lib76Component } from '@my-workspace/lib76';
import { Lib77Component } from '@my-workspace/lib77';
import { Lib78Component } from '@my-workspace/lib78';
import { Lib79Component } from '@my-workspace/lib79';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp70',
      component: Lib70Component
    },

    {
      path: 'comp71',
      component: Lib71Component
    },

    {
      path: 'comp72',
      component: Lib72Component
    },

    {
      path: 'comp73',
      component: Lib73Component
    },

    {
      path: 'comp74',
      component: Lib74Component
    },

    {
      path: 'comp75',
      component: Lib75Component
    },

    {
      path: 'comp76',
      component: Lib76Component
    },

    {
      path: 'comp77',
      component: Lib77Component
    },

    {
      path: 'comp78',
      component: Lib78Component
    },

    {
      path: 'comp79',
      component: Lib79Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe7Module { }
