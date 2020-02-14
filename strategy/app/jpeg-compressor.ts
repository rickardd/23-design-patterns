import { Compressor } from "./compressor";

export class JpegCompressor implements Compressor {
  public compress(fileName: string): void {
    console.log("Compressing using JPEG");
  }
}
