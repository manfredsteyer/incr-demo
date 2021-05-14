
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib250Component } from '@my-workspace/lib250';
import { Lib251Component } from '@my-workspace/lib251';
import { Lib252Component } from '@my-workspace/lib252';
import { Lib253Component } from '@my-workspace/lib253';
import { Lib254Component } from '@my-workspace/lib254';
import { Lib255Component } from '@my-workspace/lib255';
import { Lib256Component } from '@my-workspace/lib256';
import { Lib257Component } from '@my-workspace/lib257';
import { Lib258Component } from '@my-workspace/lib258';
import { Lib259Component } from '@my-workspace/lib259';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp250',
      component: Lib250Component
    },

    {
      path: 'comp251',
      component: Lib251Component
    },

    {
      path: 'comp252',
      component: Lib252Component
    },

    {
      path: 'comp253',
      component: Lib253Component
    },

    {
      path: 'comp254',
      component: Lib254Component
    },

    {
      path: 'comp255',
      component: Lib255Component
    },

    {
      path: 'comp256',
      component: Lib256Component
    },

    {
      path: 'comp257',
      component: Lib257Component
    },

    {
      path: 'comp258',
      component: Lib258Component
    },

    {
      path: 'comp259',
      component: Lib259Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe25Module { }
