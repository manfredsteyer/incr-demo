
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib96-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib96Component implements OnInit {
      constructor() { }
  
      title = 'lib96-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib96Component],
      providers: [],
      exports: [Lib96Component],
  })
  export class Lib96Module { }

