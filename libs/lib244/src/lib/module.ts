
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib244-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib244Component implements OnInit {
      constructor() { }
  
      title = 'lib244-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib244Component],
      providers: [],
      exports: [Lib244Component],
  })
  export class Lib244Module { }

