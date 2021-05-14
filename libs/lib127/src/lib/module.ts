
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib127-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib127Component implements OnInit {
      constructor() { }
  
      title = 'lib127-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib127Component],
      providers: [],
      exports: [Lib127Component],
  })
  export class Lib127Module { }

