
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib144-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib144Component implements OnInit {
      constructor() { }
  
      title = 'lib144-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib144Component],
      providers: [],
      exports: [Lib144Component],
  })
  export class Lib144Module { }

