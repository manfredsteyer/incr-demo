
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib170Component } from '@my-workspace/lib170';
import { Lib171Component } from '@my-workspace/lib171';
import { Lib172Component } from '@my-workspace/lib172';
import { Lib173Component } from '@my-workspace/lib173';
import { Lib174Component } from '@my-workspace/lib174';
import { Lib175Component } from '@my-workspace/lib175';
import { Lib176Component } from '@my-workspace/lib176';
import { Lib177Component } from '@my-workspace/lib177';
import { Lib178Component } from '@my-workspace/lib178';
import { Lib179Component } from '@my-workspace/lib179';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp170',
      component: Lib170Component
    },

    {
      path: 'comp171',
      component: Lib171Component
    },

    {
      path: 'comp172',
      component: Lib172Component
    },

    {
      path: 'comp173',
      component: Lib173Component
    },

    {
      path: 'comp174',
      component: Lib174Component
    },

    {
      path: 'comp175',
      component: Lib175Component
    },

    {
      path: 'comp176',
      component: Lib176Component
    },

    {
      path: 'comp177',
      component: Lib177Component
    },

    {
      path: 'comp178',
      component: Lib178Component
    },

    {
      path: 'comp179',
      component: Lib179Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe17Module { }
