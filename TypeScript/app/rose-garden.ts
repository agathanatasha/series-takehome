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
const sulfuras = "Sulfuras, Hand of Ragnaros";
const brie = "Aged Brie";
const backstagePass = "Backstage passes to a TAFKAL80ETC concert";

export class RoseGarden {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  // updateQuality() {
  //   for (let i = 0; i < this.items.length; i++) {
  //     if (
  //       this.items[i].name != "Aged Brie" &&
  //       this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
  //     ) {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
  //           this.items[i].quality = this.items[i].quality - 1;
  //         }
  //       }
  //     } else {
  //       if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1;
  //         if (
  //           this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
  //         ) {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != "Aged Brie") {
  //         if (
  //           this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
  //         ) {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
  //               this.items[i].quality = this.items[i].quality - 1;
  //             }
  //           }
  //         } else {
  //           this.items[i].quality =
  //             this.items[i].quality - this.items[i].quality;
  //         }
  //       } else {
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1;
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }

  updateQuality(): Array<Item> {
    for (const item of this.items) {
      // update quality
      if (item.name === brie) {
        item.quality = Math.min(50, item.quality + 2);
      } else if (item.name === backstagePass) {
        if (item.sellIn === 0) {
          item.quality = 0;
        } else if (item.sellIn <= 5) {
          item.quality = Math.min(50, item.quality + 3);
        } else if (item.sellIn <= 10) {
          item.quality = Math.min(50, item.quality + 2);
        } else {
          item.quality = Math.min(50, item.quality + 1);
        }
      } else if (item.name !== sulfuras) {
        if (item.sellIn <= 0) {
          item.quality = Math.max(0, item.quality - 2);
        } else {
          item.quality = Math.max(0, item.quality - 1);
        }
      }
      // if (item.quality > 0 || item.quality <= 50) {
      // }

      // update sellIn
      if (item.name !== sulfuras) {
        item.sellIn -= 1;
      }
    }
    return this.items;
  }
}
