
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib78-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib78Component implements OnInit {
      constructor() { }
  
      title = 'lib78-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib78Component],
      providers: [],
      exports: [Lib78Component],
  })
  export class Lib78Module { }

