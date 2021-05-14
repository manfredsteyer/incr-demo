
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib121-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib121Component implements OnInit {
      constructor() { }
  
      title = 'lib121-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib121Component],
      providers: [],
      exports: [Lib121Component],
  })
  export class Lib121Module { }

