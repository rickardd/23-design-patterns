export interface Filter {
  apply(fileName: string): void;
}
