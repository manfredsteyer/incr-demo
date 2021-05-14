
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib261-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib261Component implements OnInit {
      constructor() { }
  
      title = 'lib261-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib261Component],
      providers: [],
      exports: [Lib261Component],
  })
  export class Lib261Module { }

