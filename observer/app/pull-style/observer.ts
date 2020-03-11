export interface Observer {
  id: symbol
  update(): void
}
