
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib100-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib100Component implements OnInit {
      constructor() { }
  
      title = 'lib100-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib100Component],
      providers: [],
      exports: [Lib100Component],
  })
  export class Lib100Module { }

