export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class RoseGarden {
  items: Array<Item>;
  specialItems = {
    sulfuras: "Sulfuras, Hand of Ragnaros",
    brie: "Aged Brie",
    backstagePass: "Backstage passes to a TAFKAL80ETC concert",
  };

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Array<Item> {
    for (const item of this.items) {
      // update quality
      let newQualityValue: number;
      switch (item.name) {
        case this.specialItems.sulfuras:
          // skip item
          continue;
        case this.specialItems.brie:
          newQualityValue =
            item.sellIn <= 0 ? item.quality + 2 : item.quality + 1;
          item.quality =
            item.quality > 50 ? item.quality : Math.min(50, newQualityValue);
          break;
        case this.specialItems.backstagePass:
          switch (true) {
            case item.sellIn <= 0:
              newQualityValue = 0;
              break;
            case item.sellIn <= 5:
              newQualityValue = item.quality + 3;
              break;
            case item.sellIn <= 10:
              newQualityValue = item.quality + 2;
              break;
            default:
              newQualityValue = item.quality + 1;
          }
          item.quality =
            item.quality > 50 ? item.quality : Math.min(50, newQualityValue);
          break;
        default:
          newQualityValue =
            item.sellIn <= 0 ? item.quality - 2 : item.quality - 1;
          item.quality = Math.max(0, newQualityValue);
      }

      // update sellIn
      item.sellIn -= 1;
    }
    return this.items;
  }
}
