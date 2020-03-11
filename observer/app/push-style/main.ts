import { DataSource } from "./data-source";
import { SpreadSheet } from "./spread-sheet";
import { Chart } from "./chart";

class Main {
  constructor() {
    const dataSource = new DataSource()
    const sheet1 = new SpreadSheet()
    const sheet2 = new SpreadSheet()
    const chart = new Chart()
    const chart2 = new Chart()

    dataSource.addObserver(sheet1)
    dataSource.addObserver(sheet2)
    dataSource.addObserver(chart)
    dataSource.addObserver(chart2)
    dataSource.removeObserver(chart2)

    setInterval(() => {
      dataSource.setValue(Math.floor(Math.random() * 10))
    }, 2000)

  }
}

new Main();
