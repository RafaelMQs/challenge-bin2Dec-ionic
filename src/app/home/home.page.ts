/* eslint-disable eqeqeq */
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

  binaryResult = 0;

  constructor() {}

  ngOnInit(): void {
    const element = document.querySelector('#commandInput');
    element.classList.add(
      'animate__animated',
      'animate__flash',
      'animate__infinite',
      'animate__slow'
    );

    this.textLogArray.push({
      prefix: '>',
      text: 'Starting typing a number below...',
      color: 'success',
    });
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
    if (keyCode == 13) {
      this.binaryToDecimal();
      this.commandInput = '';
    }
  }

  binaryToDecimal() {
    if (this.commandInput == 'cls') {
      this.textLogArray = new Array();
    } else {
      this.binaryResult = 0;
      let exponent = 0;
      for (let index = this.commandInput.length - 1; index >= 0; index--) {
        if (this.commandInput[index] != '0' && this.commandInput[index] != '1') {
          return this.textLogModel('!', `Invalid expression for "${this.commandInput}": expectiong a binary number`, 'danger');
        } else {
          this.binaryResult += Number(this.commandInput[index]) * 2 ** exponent;
          exponent++;
        }
      }

      this.textLogModel('>', `num: ${this.commandInput}`, 'ligth');
      this.textLogModel('=', `result: ${this.binaryResult}`, 'primary');
    }
  }

  textLogModel(prefixRef: string, textRef: string, colorRef: string){
    return this.textLogArray.push({
      prefix: prefixRef,
      text: textRef,
      color: colorRef
    });
  }
}
