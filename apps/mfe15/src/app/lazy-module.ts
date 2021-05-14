
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib150Component } from '@my-workspace/lib150';
import { Lib151Component } from '@my-workspace/lib151';
import { Lib152Component } from '@my-workspace/lib152';
import { Lib153Component } from '@my-workspace/lib153';
import { Lib154Component } from '@my-workspace/lib154';
import { Lib155Component } from '@my-workspace/lib155';
import { Lib156Component } from '@my-workspace/lib156';
import { Lib157Component } from '@my-workspace/lib157';
import { Lib158Component } from '@my-workspace/lib158';
import { Lib159Component } from '@my-workspace/lib159';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp150',
      component: Lib150Component
    },

    {
      path: 'comp151',
      component: Lib151Component
    },

    {
      path: 'comp152',
      component: Lib152Component
    },

    {
      path: 'comp153',
      component: Lib153Component
    },

    {
      path: 'comp154',
      component: Lib154Component
    },

    {
      path: 'comp155',
      component: Lib155Component
    },

    {
      path: 'comp156',
      component: Lib156Component
    },

    {
      path: 'comp157',
      component: Lib157Component
    },

    {
      path: 'comp158',
      component: Lib158Component
    },

    {
      path: 'comp159',
      component: Lib159Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe15Module { }
