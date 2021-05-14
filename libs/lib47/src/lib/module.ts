
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib47-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib47Component implements OnInit {
      constructor() { }
  
      title = 'lib47-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib47Component],
      providers: [],
      exports: [Lib47Component],
  })
  export class Lib47Module { }

