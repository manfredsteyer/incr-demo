
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib277-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib277Component implements OnInit {
      constructor() { }
  
      title = 'lib277-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib277Component],
      providers: [],
      exports: [Lib277Component],
  })
  export class Lib277Module { }

