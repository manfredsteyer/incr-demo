
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib30Component } from '@my-workspace/lib30';
import { Lib31Component } from '@my-workspace/lib31';
import { Lib32Component } from '@my-workspace/lib32';
import { Lib33Component } from '@my-workspace/lib33';
import { Lib34Component } from '@my-workspace/lib34';
import { Lib35Component } from '@my-workspace/lib35';
import { Lib36Component } from '@my-workspace/lib36';
import { Lib37Component } from '@my-workspace/lib37';
import { Lib38Component } from '@my-workspace/lib38';
import { Lib39Component } from '@my-workspace/lib39';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           
    {
      path: 'comp30',
      component: Lib30Component
    },

    {
      path: 'comp31',
      component: Lib31Component
    },

    {
      path: 'comp32',
      component: Lib32Component
    },

    {
      path: 'comp33',
      component: Lib33Component
    },

    {
      path: 'comp34',
      component: Lib34Component
    },

    {
      path: 'comp35',
      component: Lib35Component
    },

    {
      path: 'comp36',
      component: Lib36Component
    },

    {
      path: 'comp37',
      component: Lib37Component
    },

    {
      path: 'comp38',
      component: Lib38Component
    },

    {
      path: 'comp39',
      component: Lib39Component
    },

        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe3Module { }
