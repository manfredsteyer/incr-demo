
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib160Component } from '@my-workspace/lib160';
import { Lib161Component } from '@my-workspace/lib161';
import { Lib162Component } from '@my-workspace/lib162';
import { Lib163Component } from '@my-workspace/lib163';
import { Lib164Component } from '@my-workspace/lib164';
import { Lib165Component } from '@my-workspace/lib165';
import { Lib166Component } from '@my-workspace/lib166';
import { Lib167Component } from '@my-workspace/lib167';
import { Lib168Component } from '@my-workspace/lib168';
import { Lib169Component } from '@my-workspace/lib169';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp160',
      component: Lib160Component
    },

    {
      path: 'comp161',
      component: Lib161Component
    },

    {
      path: 'comp162',
      component: Lib162Component
    },

    {
      path: 'comp163',
      component: Lib163Component
    },

    {
      path: 'comp164',
      component: Lib164Component
    },

    {
      path: 'comp165',
      component: Lib165Component
    },

    {
      path: 'comp166',
      component: Lib166Component
    },

    {
      path: 'comp167',
      component: Lib167Component
    },

    {
      path: 'comp168',
      component: Lib168Component
    },

    {
      path: 'comp169',
      component: Lib169Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe16Module { }
