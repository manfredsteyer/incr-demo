
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib110-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib110Component implements OnInit {
      constructor() { }
  
      title = 'lib110-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib110Component],
      providers: [],
      exports: [Lib110Component],
  })
  export class Lib110Module { }

