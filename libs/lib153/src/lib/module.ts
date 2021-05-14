
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib153-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib153Component implements OnInit {
      constructor() { }
  
      title = 'lib153-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib153Component],
      providers: [],
      exports: [Lib153Component],
  })
  export class Lib153Module { }

