
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib40Component } from '@my-workspace/lib40';
import { Lib41Component } from '@my-workspace/lib41';
import { Lib42Component } from '@my-workspace/lib42';
import { Lib43Component } from '@my-workspace/lib43';
import { Lib44Component } from '@my-workspace/lib44';
import { Lib45Component } from '@my-workspace/lib45';
import { Lib46Component } from '@my-workspace/lib46';
import { Lib47Component } from '@my-workspace/lib47';
import { Lib48Component } from '@my-workspace/lib48';
import { Lib49Component } from '@my-workspace/lib49';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp40',
      component: Lib40Component
    },

    {
      path: 'comp41',
      component: Lib41Component
    },

    {
      path: 'comp42',
      component: Lib42Component
    },

    {
      path: 'comp43',
      component: Lib43Component
    },

    {
      path: 'comp44',
      component: Lib44Component
    },

    {
      path: 'comp45',
      component: Lib45Component
    },

    {
      path: 'comp46',
      component: Lib46Component
    },

    {
      path: 'comp47',
      component: Lib47Component
    },

    {
      path: 'comp48',
      component: Lib48Component
    },

    {
      path: 'comp49',
      component: Lib49Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe4Module { }
