
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib11-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib11Component implements OnInit {
      constructor() { }
  
      title = 'lib11-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib11Component],
      providers: [],
      exports: [Lib11Component],
  })
  export class Lib11Module { }

