import { Item, RoseGarden } from "@/rose-garden";

describe("Rose Garden", () => {
  describe("Aged Brie", () => {
    it("quality increases by 2 everyday", () => {
      const roseGarden = new RoseGarden([new Item("Aged Brie", 0, 0)]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("Aged Brie");
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(2);
    });

    it("quality does not increase pass 50", () => {
      const roseGarden = new RoseGarden([new Item("Aged Brie", 0, 50)]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("Aged Brie");
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(50);
    });

    it("quality increases regardless of sellIn", () => {
      const roseGarden = new RoseGarden([new Item("Aged Brie", -1, 0)]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("Aged Brie");
      expect(items[0].sellIn).toEqual(-2);
      expect(items[0].quality).toEqual(2);
    });
  });

  describe("Sulfuras", () => {
    it("quality or sellIn does not change", () => {
      const roseGarden = new RoseGarden([
        new Item("Sulfuras, Hand of Ragnaros", -1, 2),
      ]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(2);
    });

    it("can have quality 80", () => {
      const roseGarden = new RoseGarden([
        new Item("Sulfuras, Hand of Ragnaros", 10, 80),
      ]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
      expect(items[0].sellIn).toEqual(10);
      expect(items[0].quality).toEqual(80);
    });
  });

  describe("Backstage passes", () => {
    it("quality increases by 1 when there are more than 10 days", () => {
      const roseGarden = new RoseGarden([
        new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0),
      ]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sellIn).toEqual(10);
      expect(items[0].quality).toEqual(1);
    });

    it("quality increases by 2 when there are 10 days or less", () => {
      const roseGarden = new RoseGarden([
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0),
      ]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(2);
    });

    it("quality increases by 3 when there are 5 days or less", () => {
      const roseGarden = new RoseGarden([
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0),
      ]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sellIn).toEqual(4);
      expect(items[0].quality).toEqual(3);
    });

    it("quality drops to 0 after concert", () => {
      const roseGarden = new RoseGarden([
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
      ]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    });

    it("quality cannot be negative", () => {
      const roseGarden = new RoseGarden([
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),
      ]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    });

    it("quality cannot increases pass 50", () => {
      const roseGarden = new RoseGarden([
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50),
      ]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sellIn).toEqual(4);
      expect(items[0].quality).toEqual(50);
    });
  });

  describe("Other items", () => {
    it("decreases in quality by 1 with positive sellIn", () => {
      const roseGarden = new RoseGarden([new Item("test item", 10, 10)]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("test item");
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(9);
    });

    it("decreases in quality by 2 with negative sellIn", () => {
      const roseGarden = new RoseGarden([new Item("test item", 0, 10)]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("test item");
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(8);
    });

    it("quality cannot be negative", () => {
      const roseGarden = new RoseGarden([new Item("test item", 0, 1)]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe("test item");
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    });
  });
});
