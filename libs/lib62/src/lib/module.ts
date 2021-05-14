
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib62-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib62Component implements OnInit {
      constructor() { }
  
      title = 'lib62-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib62Component],
      providers: [],
      exports: [Lib62Component],
  })
  export class Lib62Module { }

