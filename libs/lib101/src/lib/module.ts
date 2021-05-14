
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib101-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib101Component implements OnInit {
      constructor() { }
  
      title = 'lib101-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib101Component],
      providers: [],
      exports: [Lib101Component],
  })
  export class Lib101Module { }

