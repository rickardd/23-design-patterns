import { Filter } from "./filter";

export class BlackAndWhiteFilter implements Filter {
  public apply(fileName: string): void {
    console.log("Applying B&W filter");
  }
}
