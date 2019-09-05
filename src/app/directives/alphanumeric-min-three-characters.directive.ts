import { Directive, Input, OnChanges } from "@angular/core";

@Directive({
  selector: "[appAlphanumericMinThreeCharacters]"
})
export class AlphanumericMinThreeCharactersDirective implements OnChanges {
  @Input()
  inputElement: string;
  constructor() {}
  ngOnChanges() {}
}
