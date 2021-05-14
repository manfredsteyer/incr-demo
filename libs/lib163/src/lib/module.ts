
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib163-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib163Component implements OnInit {
      constructor() { }
  
      title = 'lib163-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib163Component],
      providers: [],
      exports: [Lib163Component],
  })
  export class Lib163Module { }

