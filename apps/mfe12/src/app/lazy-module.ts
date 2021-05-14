
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib120Component } from '@my-workspace/lib120';
import { Lib121Component } from '@my-workspace/lib121';
import { Lib122Component } from '@my-workspace/lib122';
import { Lib123Component } from '@my-workspace/lib123';
import { Lib124Component } from '@my-workspace/lib124';
import { Lib125Component } from '@my-workspace/lib125';
import { Lib126Component } from '@my-workspace/lib126';
import { Lib127Component } from '@my-workspace/lib127';
import { Lib128Component } from '@my-workspace/lib128';
import { Lib129Component } from '@my-workspace/lib129';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp120',
      component: Lib120Component
    },

    {
      path: 'comp121',
      component: Lib121Component
    },

    {
      path: 'comp122',
      component: Lib122Component
    },

    {
      path: 'comp123',
      component: Lib123Component
    },

    {
      path: 'comp124',
      component: Lib124Component
    },

    {
      path: 'comp125',
      component: Lib125Component
    },

    {
      path: 'comp126',
      component: Lib126Component
    },

    {
      path: 'comp127',
      component: Lib127Component
    },

    {
      path: 'comp128',
      component: Lib128Component
    },

    {
      path: 'comp129',
      component: Lib129Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe12Module { }
