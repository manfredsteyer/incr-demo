
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib291-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib291Component implements OnInit {
      constructor() { }
  
      title = 'lib291-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib291Component],
      providers: [],
      exports: [Lib291Component],
  })
  export class Lib291Module { }

