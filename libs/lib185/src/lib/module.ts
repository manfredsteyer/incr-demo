
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib185-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib185Component implements OnInit {
      constructor() { }
  
      title = 'lib185-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib185Component],
      providers: [],
      exports: [Lib185Component],
  })
  export class Lib185Module { }

