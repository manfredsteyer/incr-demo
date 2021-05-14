
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib285-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib285Component implements OnInit {
      constructor() { }
  
      title = 'lib285-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib285Component],
      providers: [],
      exports: [Lib285Component],
  })
  export class Lib285Module { }

