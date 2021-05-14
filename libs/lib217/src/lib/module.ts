
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib217-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib217Component implements OnInit {
      constructor() { }
  
      title = 'lib217-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib217Component],
      providers: [],
      exports: [Lib217Component],
  })
  export class Lib217Module { }

