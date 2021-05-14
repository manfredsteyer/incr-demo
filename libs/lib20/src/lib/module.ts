
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib20-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib20Component implements OnInit {
      constructor() { }
  
      title = 'lib20-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib20Component],
      providers: [],
      exports: [Lib20Component],
  })
  export class Lib20Module { }

