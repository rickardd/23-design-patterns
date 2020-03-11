export interface Observer {
  id: symbol
  update(value: number): void
}
