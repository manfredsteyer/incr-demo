
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib128-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib128Component implements OnInit {
      constructor() { }
  
      title = 'lib128-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib128Component],
      providers: [],
      exports: [Lib128Component],
  })
  export class Lib128Module { }

