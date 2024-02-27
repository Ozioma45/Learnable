class StockMarketExchange {
  getStockMarketData() {
    return `<note>
        <to>Data</to>
        <from>1</from>
        <heading>Facebook</heading>
        <body>3.01</body>
        </note>`;
  }

  xml() {
    //fetch the stock market data
    return this.getStockMarketData();
  }
}

class ChartsData {
  constructor(StockMarketExchange) {
    this.StockMarketExchange = StockMarketExchange;
  }

  getData() {
    //return charts data in json
    this.StockMarketExchange.json();
  }
}

class Adapter {
  constructor(StockMarketExchange) {
    this.StockMarketExchange = StockMarketExchange;
  }

  xmlToJSON() {
    //converts xml data to json
  }

  json() {
    return this.xmlToJSON(this.StockMarketExchange.xml());
  }
}

const stockMarket = new StockMarketExchange();

const stockMarketAdapter = new Adapter(stockMarket);

const chartsDta = new ChartsData(stockMarketAdapter);
