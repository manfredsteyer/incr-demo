
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib230Component } from '@my-workspace/lib230';
import { Lib231Component } from '@my-workspace/lib231';
import { Lib232Component } from '@my-workspace/lib232';
import { Lib233Component } from '@my-workspace/lib233';
import { Lib234Component } from '@my-workspace/lib234';
import { Lib235Component } from '@my-workspace/lib235';
import { Lib236Component } from '@my-workspace/lib236';
import { Lib237Component } from '@my-workspace/lib237';
import { Lib238Component } from '@my-workspace/lib238';
import { Lib239Component } from '@my-workspace/lib239';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp230',
      component: Lib230Component
    },

    {
      path: 'comp231',
      component: Lib231Component
    },

    {
      path: 'comp232',
      component: Lib232Component
    },

    {
      path: 'comp233',
      component: Lib233Component
    },

    {
      path: 'comp234',
      component: Lib234Component
    },

    {
      path: 'comp235',
      component: Lib235Component
    },

    {
      path: 'comp236',
      component: Lib236Component
    },

    {
      path: 'comp237',
      component: Lib237Component
    },

    {
      path: 'comp238',
      component: Lib238Component
    },

    {
      path: 'comp239',
      component: Lib239Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe23Module { }
