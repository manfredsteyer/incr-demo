
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib214-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib214Component implements OnInit {
      constructor() { }
  
      title = 'lib214-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib214Component],
      providers: [],
      exports: [Lib214Component],
  })
  export class Lib214Module { }

