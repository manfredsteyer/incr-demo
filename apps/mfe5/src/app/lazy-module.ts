
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib50Component } from '@my-workspace/lib50';
import { Lib51Component } from '@my-workspace/lib51';
import { Lib52Component } from '@my-workspace/lib52';
import { Lib53Component } from '@my-workspace/lib53';
import { Lib54Component } from '@my-workspace/lib54';
import { Lib55Component } from '@my-workspace/lib55';
import { Lib56Component } from '@my-workspace/lib56';
import { Lib57Component } from '@my-workspace/lib57';
import { Lib58Component } from '@my-workspace/lib58';
import { Lib59Component } from '@my-workspace/lib59';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp50',
      component: Lib50Component
    },

    {
      path: 'comp51',
      component: Lib51Component
    },

    {
      path: 'comp52',
      component: Lib52Component
    },

    {
      path: 'comp53',
      component: Lib53Component
    },

    {
      path: 'comp54',
      component: Lib54Component
    },

    {
      path: 'comp55',
      component: Lib55Component
    },

    {
      path: 'comp56',
      component: Lib56Component
    },

    {
      path: 'comp57',
      component: Lib57Component
    },

    {
      path: 'comp58',
      component: Lib58Component
    },

    {
      path: 'comp59',
      component: Lib59Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe5Module { }
