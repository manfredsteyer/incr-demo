
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib140Component } from '@my-workspace/lib140';
import { Lib141Component } from '@my-workspace/lib141';
import { Lib142Component } from '@my-workspace/lib142';
import { Lib143Component } from '@my-workspace/lib143';
import { Lib144Component } from '@my-workspace/lib144';
import { Lib145Component } from '@my-workspace/lib145';
import { Lib146Component } from '@my-workspace/lib146';
import { Lib147Component } from '@my-workspace/lib147';
import { Lib148Component } from '@my-workspace/lib148';
import { Lib149Component } from '@my-workspace/lib149';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp140',
      component: Lib140Component
    },

    {
      path: 'comp141',
      component: Lib141Component
    },

    {
      path: 'comp142',
      component: Lib142Component
    },

    {
      path: 'comp143',
      component: Lib143Component
    },

    {
      path: 'comp144',
      component: Lib144Component
    },

    {
      path: 'comp145',
      component: Lib145Component
    },

    {
      path: 'comp146',
      component: Lib146Component
    },

    {
      path: 'comp147',
      component: Lib147Component
    },

    {
      path: 'comp148',
      component: Lib148Component
    },

    {
      path: 'comp149',
      component: Lib149Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe14Module { }
