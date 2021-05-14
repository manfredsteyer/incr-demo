
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib161-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib161Component implements OnInit {
      constructor() { }
  
      title = 'lib161-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib161Component],
      providers: [],
      exports: [Lib161Component],
  })
  export class Lib161Module { }

