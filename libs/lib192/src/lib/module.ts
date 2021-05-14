
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib192-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib192Component implements OnInit {
      constructor() { }
  
      title = 'lib192-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib192Component],
      providers: [],
      exports: [Lib192Component],
  })
  export class Lib192Module { }

