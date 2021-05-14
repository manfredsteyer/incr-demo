
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib100Component } from '@my-workspace/lib100';
import { Lib101Component } from '@my-workspace/lib101';
import { Lib102Component } from '@my-workspace/lib102';
import { Lib103Component } from '@my-workspace/lib103';
import { Lib104Component } from '@my-workspace/lib104';
import { Lib105Component } from '@my-workspace/lib105';
import { Lib106Component } from '@my-workspace/lib106';
import { Lib107Component } from '@my-workspace/lib107';
import { Lib108Component } from '@my-workspace/lib108';
import { Lib109Component } from '@my-workspace/lib109';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp100',
      component: Lib100Component
    },

    {
      path: 'comp101',
      component: Lib101Component
    },

    {
      path: 'comp102',
      component: Lib102Component
    },

    {
      path: 'comp103',
      component: Lib103Component
    },

    {
      path: 'comp104',
      component: Lib104Component
    },

    {
      path: 'comp105',
      component: Lib105Component
    },

    {
      path: 'comp106',
      component: Lib106Component
    },

    {
      path: 'comp107',
      component: Lib107Component
    },

    {
      path: 'comp108',
      component: Lib108Component
    },

    {
      path: 'comp109',
      component: Lib109Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe10Module { }
