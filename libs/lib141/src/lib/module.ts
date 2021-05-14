
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib141-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib141Component implements OnInit {
      constructor() { }
  
      title = 'lib141-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib141Component],
      providers: [],
      exports: [Lib141Component],
  })
  export class Lib141Module { }

