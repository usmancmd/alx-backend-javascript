import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    const fullPrice = `${this.amount} ${this.currency.name} (${this.currency.code})`;
    return fullPrice;
  }

  static conversionRate(amount, conversionRate) {
    return amount * conversionRate;
  }
}
