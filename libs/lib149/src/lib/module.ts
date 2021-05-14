
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib149-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib149Component implements OnInit {
      constructor() { }
  
      title = 'lib149-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib149Component],
      providers: [],
      exports: [Lib149Component],
  })
  export class Lib149Module { }

