
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib242-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib242Component implements OnInit {
      constructor() { }
  
      title = 'lib242-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib242Component],
      providers: [],
      exports: [Lib242Component],
  })
  export class Lib242Module { }

