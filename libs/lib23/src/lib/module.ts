
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib23-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib23Component implements OnInit {
      constructor() { }
  
      title = 'lib23-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib23Component],
      providers: [],
      exports: [Lib23Component],
  })
  export class Lib23Module { }

