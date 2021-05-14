
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib264-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib264Component implements OnInit {
      constructor() { }
  
      title = 'lib264-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib264Component],
      providers: [],
      exports: [Lib264Component],
  })
  export class Lib264Module { }

