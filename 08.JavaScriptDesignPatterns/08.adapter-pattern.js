/* Adapter Pattern: Imagine you have two devices with different types of plugs. An adapter helps connect 
them so they can work together. Similarly, in programming, the adapter pattern helps make incompatible 
interfaces work together smoothly. */

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
