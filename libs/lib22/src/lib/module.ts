
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib22-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib22Component implements OnInit {
      constructor() { }
  
      title = 'lib22-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib22Component],
      providers: [],
      exports: [Lib22Component],
  })
  export class Lib22Module { }

