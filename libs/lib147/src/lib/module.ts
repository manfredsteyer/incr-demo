
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib147-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib147Component implements OnInit {
      constructor() { }
  
      title = 'lib147-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib147Component],
      providers: [],
      exports: [Lib147Component],
  })
  export class Lib147Module { }

