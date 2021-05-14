
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib216-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib216Component implements OnInit {
      constructor() { }
  
      title = 'lib216-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib216Component],
      providers: [],
      exports: [Lib216Component],
  })
  export class Lib216Module { }

