
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib256-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib256Component implements OnInit {
      constructor() { }
  
      title = 'lib256-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib256Component],
      providers: [],
      exports: [Lib256Component],
  })
  export class Lib256Module { }

