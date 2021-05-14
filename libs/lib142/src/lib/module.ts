
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib142-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib142Component implements OnInit {
      constructor() { }
  
      title = 'lib142-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib142Component],
      providers: [],
      exports: [Lib142Component],
  })
  export class Lib142Module { }

