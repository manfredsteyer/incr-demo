
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib270Component } from '@my-workspace/lib270';
import { Lib271Component } from '@my-workspace/lib271';
import { Lib272Component } from '@my-workspace/lib272';
import { Lib273Component } from '@my-workspace/lib273';
import { Lib274Component } from '@my-workspace/lib274';
import { Lib275Component } from '@my-workspace/lib275';
import { Lib276Component } from '@my-workspace/lib276';
import { Lib277Component } from '@my-workspace/lib277';
import { Lib278Component } from '@my-workspace/lib278';
import { Lib279Component } from '@my-workspace/lib279';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp270',
      component: Lib270Component
    },

    {
      path: 'comp271',
      component: Lib271Component
    },

    {
      path: 'comp272',
      component: Lib272Component
    },

    {
      path: 'comp273',
      component: Lib273Component
    },

    {
      path: 'comp274',
      component: Lib274Component
    },

    {
      path: 'comp275',
      component: Lib275Component
    },

    {
      path: 'comp276',
      component: Lib276Component
    },

    {
      path: 'comp277',
      component: Lib277Component
    },

    {
      path: 'comp278',
      component: Lib278Component
    },

    {
      path: 'comp279',
      component: Lib279Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe27Module { }
