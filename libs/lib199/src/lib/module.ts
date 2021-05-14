
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib199-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib199Component implements OnInit {
      constructor() { }
  
      title = 'lib199-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib199Component],
      providers: [],
      exports: [Lib199Component],
  })
  export class Lib199Module { }

