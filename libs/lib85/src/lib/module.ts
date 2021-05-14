
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib85-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib85Component implements OnInit {
      constructor() { }
  
      title = 'lib85-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib85Component],
      providers: [],
      exports: [Lib85Component],
  })
  export class Lib85Module { }

