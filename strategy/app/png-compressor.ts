import { Compressor } from "./compressor";

export class PngCompressor implements Compressor {
  public compress(fileName: string): void {
    console.log("Compressing using PNG");
  }
}
