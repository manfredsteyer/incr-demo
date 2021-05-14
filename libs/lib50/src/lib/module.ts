
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib50-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib50Component implements OnInit {
      constructor() { }
  
      title = 'lib50-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib50Component],
      providers: [],
      exports: [Lib50Component],
  })
  export class Lib50Module { }

