
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib160-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib160Component implements OnInit {
      constructor() { }
  
      title = 'lib160-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib160Component],
      providers: [],
      exports: [Lib160Component],
  })
  export class Lib160Module { }

