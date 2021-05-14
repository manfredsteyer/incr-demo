
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib180Component } from '@my-workspace/lib180';
import { Lib181Component } from '@my-workspace/lib181';
import { Lib182Component } from '@my-workspace/lib182';
import { Lib183Component } from '@my-workspace/lib183';
import { Lib184Component } from '@my-workspace/lib184';
import { Lib185Component } from '@my-workspace/lib185';
import { Lib186Component } from '@my-workspace/lib186';
import { Lib187Component } from '@my-workspace/lib187';
import { Lib188Component } from '@my-workspace/lib188';
import { Lib189Component } from '@my-workspace/lib189';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp180',
      component: Lib180Component
    },

    {
      path: 'comp181',
      component: Lib181Component
    },

    {
      path: 'comp182',
      component: Lib182Component
    },

    {
      path: 'comp183',
      component: Lib183Component
    },

    {
      path: 'comp184',
      component: Lib184Component
    },

    {
      path: 'comp185',
      component: Lib185Component
    },

    {
      path: 'comp186',
      component: Lib186Component
    },

    {
      path: 'comp187',
      component: Lib187Component
    },

    {
      path: 'comp188',
      component: Lib188Component
    },

    {
      path: 'comp189',
      component: Lib189Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe18Module { }
