
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib53-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib53Component implements OnInit {
      constructor() { }
  
      title = 'lib53-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib53Component],
      providers: [],
      exports: [Lib53Component],
  })
  export class Lib53Module { }

