import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  commandInput: string;

  descTitleArray: string[] = [
    '# Welcome to bin2Dec.',
    '# Use this terminal to convert numbers.',
    '# You may type cls to clear inputs and outputs.',
  ];

  textLogArray: any[] = new Array();

  constructor() {}

  ngOnInit(): void {
    const element = document.querySelector('#commandInput');
    element.classList.add(
      'animate__animated',
      'animate__flash',
      'animate__infinite',
      'animate__slow'
    );
  }

  focusTerminalInput() {
    const element = document.querySelector('#commandInput');
    element.classList.remove(
      'animate__animated',
      'animate__flash',
      'animate__infinite'
    );
  }

  unFocusTerminalInput() {
    const element = document.querySelector('#commandInput');
    element.classList.add(
      'animate__animated',
      'animate__flash',
      'animate__infinite',
      'animate__slow'
    );
  }

  eventHandler(keyCode: any) {
    // eslint-disable-next-line eqeqeq
    if(keyCode == 13){
      this.textLogArray.push({prefix: '!', text: this.commandInput, color: 'danger'});
      this.commandInput = '';
    }
  }


}
