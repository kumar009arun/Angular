import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sentencecase'
})

export class sentenceCasePipe implements PipeTransform {
    transform(str) {
        let firstChar = str.charAt(0);
        let remainChar = str.substring(1);

        let sentence = firstChar.toUpperCase() + remainChar.toLowerCase();
        return sentence;
    }
}