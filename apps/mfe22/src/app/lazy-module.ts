
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib220Component } from '@my-workspace/lib220';
import { Lib221Component } from '@my-workspace/lib221';
import { Lib222Component } from '@my-workspace/lib222';
import { Lib223Component } from '@my-workspace/lib223';
import { Lib224Component } from '@my-workspace/lib224';
import { Lib225Component } from '@my-workspace/lib225';
import { Lib226Component } from '@my-workspace/lib226';
import { Lib227Component } from '@my-workspace/lib227';
import { Lib228Component } from '@my-workspace/lib228';
import { Lib229Component } from '@my-workspace/lib229';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp220',
      component: Lib220Component
    },

    {
      path: 'comp221',
      component: Lib221Component
    },

    {
      path: 'comp222',
      component: Lib222Component
    },

    {
      path: 'comp223',
      component: Lib223Component
    },

    {
      path: 'comp224',
      component: Lib224Component
    },

    {
      path: 'comp225',
      component: Lib225Component
    },

    {
      path: 'comp226',
      component: Lib226Component
    },

    {
      path: 'comp227',
      component: Lib227Component
    },

    {
      path: 'comp228',
      component: Lib228Component
    },

    {
      path: 'comp229',
      component: Lib229Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe22Module { }
