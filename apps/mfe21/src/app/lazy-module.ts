
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib210Component } from '@my-workspace/lib210';
import { Lib211Component } from '@my-workspace/lib211';
import { Lib212Component } from '@my-workspace/lib212';
import { Lib213Component } from '@my-workspace/lib213';
import { Lib214Component } from '@my-workspace/lib214';
import { Lib215Component } from '@my-workspace/lib215';
import { Lib216Component } from '@my-workspace/lib216';
import { Lib217Component } from '@my-workspace/lib217';
import { Lib218Component } from '@my-workspace/lib218';
import { Lib219Component } from '@my-workspace/lib219';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp210',
      component: Lib210Component
    },

    {
      path: 'comp211',
      component: Lib211Component
    },

    {
      path: 'comp212',
      component: Lib212Component
    },

    {
      path: 'comp213',
      component: Lib213Component
    },

    {
      path: 'comp214',
      component: Lib214Component
    },

    {
      path: 'comp215',
      component: Lib215Component
    },

    {
      path: 'comp216',
      component: Lib216Component
    },

    {
      path: 'comp217',
      component: Lib217Component
    },

    {
      path: 'comp218',
      component: Lib218Component
    },

    {
      path: 'comp219',
      component: Lib219Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe21Module { }
