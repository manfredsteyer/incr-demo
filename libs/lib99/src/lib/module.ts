
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib99-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib99Component implements OnInit {
      constructor() { }
  
      title = 'lib99-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib99Component],
      providers: [],
      exports: [Lib99Component],
  })
  export class Lib99Module { }

