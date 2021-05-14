
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib269-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib269Component implements OnInit {
      constructor() { }
  
      title = 'lib269-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib269Component],
      providers: [],
      exports: [Lib269Component],
  })
  export class Lib269Module { }

