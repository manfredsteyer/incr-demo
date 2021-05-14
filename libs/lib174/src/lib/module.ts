
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib174-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib174Component implements OnInit {
      constructor() { }
  
      title = 'lib174-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib174Component],
      providers: [],
      exports: [Lib174Component],
  })
  export class Lib174Module { }

