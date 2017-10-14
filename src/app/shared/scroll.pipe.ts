import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'scroll',
  pure: false
})
export class ScrollPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const array = value.split(' ');

    return array.map(word => this.shuffleWord(word)).join(' ');
  }

  shuffleWord(word: string): string {
    const array = word.split('');
    const first = array[0];
    const middle = array.slice(1, word.length - 1).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('');
    const last = array[word.length - 1];
    return first + middle + last;
  }
}
