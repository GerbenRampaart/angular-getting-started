import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convertToSpaces"
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, ...args: string[]) {
    let result = value;
    args.forEach(element => {
      result = result.replace(element, " ");
    });
    return result;
  }
}
