
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib176-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib176Component implements OnInit {
      constructor() { }
  
      title = 'lib176-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib176Component],
      providers: [],
      exports: [Lib176Component],
  })
  export class Lib176Module { }

