import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "htmlToText" })
export class HtmlToText implements PipeTransform {
  transform(text: string): string {
    return text
      .replace(/[^a-zA-Z 0-9]+/g, "")
      .replace(/ltpgt/g, " ")
      .replace(/ltbgt/g, " ");
  }
}
