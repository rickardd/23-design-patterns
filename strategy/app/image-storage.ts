import { Compressor } from "./compressor";
import { Filter } from "./filter";

export class ImageStorage {
  public store(fileName: string, compressor: Compressor, filter: Filter): void {
    compressor.compress(fileName);
    filter.apply(fileName);
    console.log("Stored", fileName);
  }
}
