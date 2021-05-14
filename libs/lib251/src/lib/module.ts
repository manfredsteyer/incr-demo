
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib251-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib251Component implements OnInit {
      constructor() { }
  
      title = 'lib251-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib251Component],
      providers: [],
      exports: [Lib251Component],
  })
  export class Lib251Module { }

