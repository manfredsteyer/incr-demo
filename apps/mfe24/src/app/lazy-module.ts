
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib240Component } from '@my-workspace/lib240';
import { Lib241Component } from '@my-workspace/lib241';
import { Lib242Component } from '@my-workspace/lib242';
import { Lib243Component } from '@my-workspace/lib243';
import { Lib244Component } from '@my-workspace/lib244';
import { Lib245Component } from '@my-workspace/lib245';
import { Lib246Component } from '@my-workspace/lib246';
import { Lib247Component } from '@my-workspace/lib247';
import { Lib248Component } from '@my-workspace/lib248';
import { Lib249Component } from '@my-workspace/lib249';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp240',
      component: Lib240Component
    },

    {
      path: 'comp241',
      component: Lib241Component
    },

    {
      path: 'comp242',
      component: Lib242Component
    },

    {
      path: 'comp243',
      component: Lib243Component
    },

    {
      path: 'comp244',
      component: Lib244Component
    },

    {
      path: 'comp245',
      component: Lib245Component
    },

    {
      path: 'comp246',
      component: Lib246Component
    },

    {
      path: 'comp247',
      component: Lib247Component
    },

    {
      path: 'comp248',
      component: Lib248Component
    },

    {
      path: 'comp249',
      component: Lib249Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe24Module { }
