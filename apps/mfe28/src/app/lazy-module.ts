
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib280Component } from '@my-workspace/lib280';
import { Lib281Component } from '@my-workspace/lib281';
import { Lib282Component } from '@my-workspace/lib282';
import { Lib283Component } from '@my-workspace/lib283';
import { Lib284Component } from '@my-workspace/lib284';
import { Lib285Component } from '@my-workspace/lib285';
import { Lib286Component } from '@my-workspace/lib286';
import { Lib287Component } from '@my-workspace/lib287';
import { Lib288Component } from '@my-workspace/lib288';
import { Lib289Component } from '@my-workspace/lib289';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp280',
      component: Lib280Component
    },

    {
      path: 'comp281',
      component: Lib281Component
    },

    {
      path: 'comp282',
      component: Lib282Component
    },

    {
      path: 'comp283',
      component: Lib283Component
    },

    {
      path: 'comp284',
      component: Lib284Component
    },

    {
      path: 'comp285',
      component: Lib285Component
    },

    {
      path: 'comp286',
      component: Lib286Component
    },

    {
      path: 'comp287',
      component: Lib287Component
    },

    {
      path: 'comp288',
      component: Lib288Component
    },

    {
      path: 'comp289',
      component: Lib289Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe28Module { }
