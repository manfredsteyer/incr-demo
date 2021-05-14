
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib223-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib223Component implements OnInit {
      constructor() { }
  
      title = 'lib223-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib223Component],
      providers: [],
      exports: [Lib223Component],
  })
  export class Lib223Module { }

