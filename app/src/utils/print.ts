import { Printable } from "./printable.js";

export function print(...objects: Printable[]) {
  for (const objectToPrint of objects) {
    console.log(objectToPrint.forText());
  }
}