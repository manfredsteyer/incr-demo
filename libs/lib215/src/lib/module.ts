
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib215-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib215Component implements OnInit {
      constructor() { }
  
      title = 'lib215-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib215Component],
      providers: [],
      exports: [Lib215Component],
  })
  export class Lib215Module { }

