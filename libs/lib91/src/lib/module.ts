
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib91-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib91Component implements OnInit {
      constructor() { }
  
      title = 'lib91-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib91Component],
      providers: [],
      exports: [Lib91Component],
  })
  export class Lib91Module { }

