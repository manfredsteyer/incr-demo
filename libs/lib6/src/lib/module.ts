
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib6-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib6Component implements OnInit {
      constructor() { }
  
      title = 'lib6-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib6Component],
      providers: [],
      exports: [Lib6Component],
  })
  export class Lib6Module { }

