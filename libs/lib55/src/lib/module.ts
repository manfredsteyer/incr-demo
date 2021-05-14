
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib55-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib55Component implements OnInit {
      constructor() { }
  
      title = 'lib55-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib55Component],
      providers: [],
      exports: [Lib55Component],
  })
  export class Lib55Module { }
