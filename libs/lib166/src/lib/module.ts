
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib166-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib166Component implements OnInit {
      constructor() { }
  
      title = 'lib166-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib166Component],
      providers: [],
      exports: [Lib166Component],
  })
  export class Lib166Module { }

