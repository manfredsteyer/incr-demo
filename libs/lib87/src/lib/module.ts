
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib87-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib87Component implements OnInit {
      constructor() { }
  
      title = 'lib87-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib87Component],
      providers: [],
      exports: [Lib87Component],
  })
  export class Lib87Module { }

