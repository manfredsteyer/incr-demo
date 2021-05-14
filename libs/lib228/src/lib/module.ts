
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib228-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib228Component implements OnInit {
      constructor() { }
  
      title = 'lib228-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib228Component],
      providers: [],
      exports: [Lib228Component],
  })
  export class Lib228Module { }

