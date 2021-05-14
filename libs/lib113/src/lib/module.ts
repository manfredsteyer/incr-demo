
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib113-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib113Component implements OnInit {
      constructor() { }
  
      title = 'lib113-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib113Component],
      providers: [],
      exports: [Lib113Component],
  })
  export class Lib113Module { }

