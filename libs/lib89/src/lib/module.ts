
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib89-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib89Component implements OnInit {
      constructor() { }
  
      title = 'lib89-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib89Component],
      providers: [],
      exports: [Lib89Component],
  })
  export class Lib89Module { }

