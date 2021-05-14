
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib194-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib194Component implements OnInit {
      constructor() { }
  
      title = 'lib194-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib194Component],
      providers: [],
      exports: [Lib194Component],
  })
  export class Lib194Module { }

