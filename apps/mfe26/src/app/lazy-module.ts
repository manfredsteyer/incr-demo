
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib260Component } from '@my-workspace/lib260';
import { Lib261Component } from '@my-workspace/lib261';
import { Lib262Component } from '@my-workspace/lib262';
import { Lib263Component } from '@my-workspace/lib263';
import { Lib264Component } from '@my-workspace/lib264';
import { Lib265Component } from '@my-workspace/lib265';
import { Lib266Component } from '@my-workspace/lib266';
import { Lib267Component } from '@my-workspace/lib267';
import { Lib268Component } from '@my-workspace/lib268';
import { Lib269Component } from '@my-workspace/lib269';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp260',
      component: Lib260Component
    },

    {
      path: 'comp261',
      component: Lib261Component
    },

    {
      path: 'comp262',
      component: Lib262Component
    },

    {
      path: 'comp263',
      component: Lib263Component
    },

    {
      path: 'comp264',
      component: Lib264Component
    },

    {
      path: 'comp265',
      component: Lib265Component
    },

    {
      path: 'comp266',
      component: Lib266Component
    },

    {
      path: 'comp267',
      component: Lib267Component
    },

    {
      path: 'comp268',
      component: Lib268Component
    },

    {
      path: 'comp269',
      component: Lib269Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe26Module { }
