
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib200Component } from '@my-workspace/lib200';
import { Lib201Component } from '@my-workspace/lib201';
import { Lib202Component } from '@my-workspace/lib202';
import { Lib203Component } from '@my-workspace/lib203';
import { Lib204Component } from '@my-workspace/lib204';
import { Lib205Component } from '@my-workspace/lib205';
import { Lib206Component } from '@my-workspace/lib206';
import { Lib207Component } from '@my-workspace/lib207';
import { Lib208Component } from '@my-workspace/lib208';
import { Lib209Component } from '@my-workspace/lib209';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp200',
      component: Lib200Component
    },

    {
      path: 'comp201',
      component: Lib201Component
    },

    {
      path: 'comp202',
      component: Lib202Component
    },

    {
      path: 'comp203',
      component: Lib203Component
    },

    {
      path: 'comp204',
      component: Lib204Component
    },

    {
      path: 'comp205',
      component: Lib205Component
    },

    {
      path: 'comp206',
      component: Lib206Component
    },

    {
      path: 'comp207',
      component: Lib207Component
    },

    {
      path: 'comp208',
      component: Lib208Component
    },

    {
      path: 'comp209',
      component: Lib209Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe20Module { }
