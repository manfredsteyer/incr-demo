
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib20Component } from '@my-workspace/lib20';
import { Lib21Component } from '@my-workspace/lib21';
import { Lib22Component } from '@my-workspace/lib22';
import { Lib23Component } from '@my-workspace/lib23';
import { Lib24Component } from '@my-workspace/lib24';
import { Lib25Component } from '@my-workspace/lib25';
import { Lib26Component } from '@my-workspace/lib26';
import { Lib27Component } from '@my-workspace/lib27';
import { Lib28Component } from '@my-workspace/lib28';
import { Lib29Component } from '@my-workspace/lib29';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp20',
      component: Lib20Component
    },

    {
      path: 'comp21',
      component: Lib21Component
    },

    {
      path: 'comp22',
      component: Lib22Component
    },

    {
      path: 'comp23',
      component: Lib23Component
    },

    {
      path: 'comp24',
      component: Lib24Component
    },

    {
      path: 'comp25',
      component: Lib25Component
    },

    {
      path: 'comp26',
      component: Lib26Component
    },

    {
      path: 'comp27',
      component: Lib27Component
    },

    {
      path: 'comp28',
      component: Lib28Component
    },

    {
      path: 'comp29',
      component: Lib29Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe2Module { }
