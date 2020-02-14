import { ImageStorage } from "./image-storage";
import { JpegCompressor } from "./jpeg-compressor";
import { PngCompressor } from "./png-compressor";
import { BlackAndWhiteFilter } from "./black-and-white-filter";

class Main {
  constructor() {
    const imageStore = new ImageStorage();

    imageStore.store("a.jpeg", new JpegCompressor(), new BlackAndWhiteFilter());
    imageStore.store("b.png", new PngCompressor(), new BlackAndWhiteFilter());
  }
}

new Main();
