
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib60Component } from '@my-workspace/lib60';
import { Lib61Component } from '@my-workspace/lib61';
import { Lib62Component } from '@my-workspace/lib62';
import { Lib63Component } from '@my-workspace/lib63';
import { Lib64Component } from '@my-workspace/lib64';
import { Lib65Component } from '@my-workspace/lib65';
import { Lib66Component } from '@my-workspace/lib66';
import { Lib67Component } from '@my-workspace/lib67';
import { Lib68Component } from '@my-workspace/lib68';
import { Lib69Component } from '@my-workspace/lib69';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp60',
      component: Lib60Component
    },

    {
      path: 'comp61',
      component: Lib61Component
    },

    {
      path: 'comp62',
      component: Lib62Component
    },

    {
      path: 'comp63',
      component: Lib63Component
    },

    {
      path: 'comp64',
      component: Lib64Component
    },

    {
      path: 'comp65',
      component: Lib65Component
    },

    {
      path: 'comp66',
      component: Lib66Component
    },

    {
      path: 'comp67',
      component: Lib67Component
    },

    {
      path: 'comp68',
      component: Lib68Component
    },

    {
      path: 'comp69',
      component: Lib69Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe6Module { }
