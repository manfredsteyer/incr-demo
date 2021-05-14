
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib201-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib201Component implements OnInit {
      constructor() { }
  
      title = 'lib201-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib201Component],
      providers: [],
      exports: [Lib201Component],
  })
  export class Lib201Module { }

