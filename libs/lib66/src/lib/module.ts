
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib66-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib66Component implements OnInit {
      constructor() { }
  
      title = 'lib66-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib66Component],
      providers: [],
      exports: [Lib66Component],
  })
  export class Lib66Module { }

