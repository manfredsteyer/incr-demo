
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib289-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib289Component implements OnInit {
      constructor() { }
  
      title = 'lib289-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib289Component],
      providers: [],
      exports: [Lib289Component],
  })
  export class Lib289Module { }

