
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib182-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib182Component implements OnInit {
      constructor() { }
  
      title = 'lib182-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib182Component],
      providers: [],
      exports: [Lib182Component],
  })
  export class Lib182Module { }

