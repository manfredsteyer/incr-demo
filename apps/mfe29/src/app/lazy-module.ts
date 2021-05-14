
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib290Component } from '@my-workspace/lib290';
import { Lib291Component } from '@my-workspace/lib291';
import { Lib292Component } from '@my-workspace/lib292';
import { Lib293Component } from '@my-workspace/lib293';
import { Lib294Component } from '@my-workspace/lib294';
import { Lib295Component } from '@my-workspace/lib295';
import { Lib296Component } from '@my-workspace/lib296';
import { Lib297Component } from '@my-workspace/lib297';
import { Lib298Component } from '@my-workspace/lib298';
import { Lib299Component } from '@my-workspace/lib299';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp290',
      component: Lib290Component
    },

    {
      path: 'comp291',
      component: Lib291Component
    },

    {
      path: 'comp292',
      component: Lib292Component
    },

    {
      path: 'comp293',
      component: Lib293Component
    },

    {
      path: 'comp294',
      component: Lib294Component
    },

    {
      path: 'comp295',
      component: Lib295Component
    },

    {
      path: 'comp296',
      component: Lib296Component
    },

    {
      path: 'comp297',
      component: Lib297Component
    },

    {
      path: 'comp298',
      component: Lib298Component
    },

    {
      path: 'comp299',
      component: Lib299Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe29Module { }
