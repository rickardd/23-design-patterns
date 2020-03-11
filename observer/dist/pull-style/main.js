"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const spread_sheet_1 = require("./spread-sheet");
const chart_1 = require("./chart");
class Main {
    constructor() {
        const dataSource = new data_source_1.DataSource();
        const sheet1 = new spread_sheet_1.SpreadSheet(dataSource);
        const sheet2 = new spread_sheet_1.SpreadSheet(dataSource);
        const chart = new chart_1.Chart(dataSource);
        const chart2 = new chart_1.Chart(dataSource);
        dataSource.addObserver(sheet1);
        dataSource.addObserver(sheet2);
        dataSource.addObserver(chart);
        dataSource.addObserver(chart2);
        dataSource.removeObserver(chart2);
        setInterval(() => {
            dataSource.setValue(Math.floor(Math.random() * 10));
            //... SpreadSheet got notified: 7
            //... SpreadSheet got notified: 7
            //... Chart got updated: 7
        }, 1000);
    }
}
new Main();
