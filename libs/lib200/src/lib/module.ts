
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib200-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib200Component implements OnInit {
      constructor() { }
  
      title = 'lib200-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib200Component],
      providers: [],
      exports: [Lib200Component],
  })
  export class Lib200Module { }

