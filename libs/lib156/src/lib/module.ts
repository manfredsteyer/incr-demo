
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib156-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib156Component implements OnInit {
      constructor() { }
  
      title = 'lib156-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib156Component],
      providers: [],
      exports: [Lib156Component],
  })
  export class Lib156Module { }

