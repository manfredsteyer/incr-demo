
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib148-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib148Component implements OnInit {
      constructor() { }
  
      title = 'lib148-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib148Component],
      providers: [],
      exports: [Lib148Component],
  })
  export class Lib148Module { }

