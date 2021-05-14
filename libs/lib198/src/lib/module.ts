
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib198-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib198Component implements OnInit {
      constructor() { }
  
      title = 'lib198-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib198Component],
      providers: [],
      exports: [Lib198Component],
  })
  export class Lib198Module { }

