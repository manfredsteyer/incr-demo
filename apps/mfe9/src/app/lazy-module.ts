
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib90Component } from '@my-workspace/lib90';
import { Lib91Component } from '@my-workspace/lib91';
import { Lib92Component } from '@my-workspace/lib92';
import { Lib93Component } from '@my-workspace/lib93';
import { Lib94Component } from '@my-workspace/lib94';
import { Lib95Component } from '@my-workspace/lib95';
import { Lib96Component } from '@my-workspace/lib96';
import { Lib97Component } from '@my-workspace/lib97';
import { Lib98Component } from '@my-workspace/lib98';
import { Lib99Component } from '@my-workspace/lib99';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp90',
      component: Lib90Component
    },

    {
      path: 'comp91',
      component: Lib91Component
    },

    {
      path: 'comp92',
      component: Lib92Component
    },

    {
      path: 'comp93',
      component: Lib93Component
    },

    {
      path: 'comp94',
      component: Lib94Component
    },

    {
      path: 'comp95',
      component: Lib95Component
    },

    {
      path: 'comp96',
      component: Lib96Component
    },

    {
      path: 'comp97',
      component: Lib97Component
    },

    {
      path: 'comp98',
      component: Lib98Component
    },

    {
      path: 'comp99',
      component: Lib99Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe9Module { }
