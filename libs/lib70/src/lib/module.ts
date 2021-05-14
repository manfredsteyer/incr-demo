
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib70-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib70Component implements OnInit {
      constructor() { }
  
      title = 'lib70-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib70Component],
      providers: [],
      exports: [Lib70Component],
  })
  export class Lib70Module { }

