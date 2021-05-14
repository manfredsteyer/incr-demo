
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib33-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib33Component implements OnInit {
      constructor() { }
  
      title = 'lib33-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib33Component],
      providers: [],
      exports: [Lib33Component],
  })
  export class Lib33Module { }

