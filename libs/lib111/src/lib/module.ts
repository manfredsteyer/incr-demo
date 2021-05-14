
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib111-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib111Component implements OnInit {
      constructor() { }
  
      title = 'lib111-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib111Component],
      providers: [],
      exports: [Lib111Component],
  })
  export class Lib111Module { }

