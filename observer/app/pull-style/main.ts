import { DataSource } from "./data-source";
import { SpreadSheet } from "./spread-sheet";
import { Chart } from "./chart";

class Main {
  constructor() {
    const dataSource = new DataSource()
    const sheet1 = new SpreadSheet(dataSource)
    const sheet2 = new SpreadSheet(dataSource)
    const chart = new Chart(dataSource)
    const chart2 = new Chart(dataSource)

    dataSource.addObserver(sheet1)
    dataSource.addObserver(sheet2)
    dataSource.addObserver(chart)
    dataSource.addObserver(chart2)
    dataSource.removeObserver(chart2)

    setInterval(() => {
      dataSource.setValue(Math.floor(Math.random() * 10))
      //... SpreadSheet got notified: 7
      //... SpreadSheet got notified: 7
      //... Chart got updated: 7
    }, 1000)
  }
}

new Main();
