const enhancer = require("./enhancer.js");

describe("enhancer.js", () => {
  describe("enhancer", () => {
    describe("repair()", () => {
      it("should repair durability to 100", () => {
        expect(
          enhancer.repair({
            name: "jeff",
            enhancment: 2,
            durability: 50
          })
        ).toEqual({
          name: "jeff",
          enhancment: 2,
          durability: 100
        });
      });
    });
    describe("success()", () => {
      it("should enhance by one if level less than 20", () => {
        expect(
          enhancer.succeed({
            name: "jeff",
            enhancment: 2,
            durability: 50
          })
        ).toEqual({
          name: "jeff",
          enhancment: 3,
          durability: 50
        });
      });
    });
    describe("fail()", () => {
      it("should decrease durability of the item by 5 if enhancment level is less than 15", () => {
        expect(
          enhancer.fail({
            name: "jeff",
            enhancment: 2,
            durability: 50
          })
        ).toEqual({
          name: "jeff",
          enhancment: 2,
          durability: 45
        });
      });

      it("should decrease durability of the item by 10 if enhancment level is 15 or more", () => {
        expect(
          enhancer.fail({
            name: "jeff",
            enhancment: 15,
            durability: 50
          })
        ).toEqual({
          name: "jeff",
          enhancment: 15,
          durability: 40
        });
      });

      it("should decrease enchance level of the item by 1 if enhancment level is 16 or more", () => {
        expect(
          enhancer.fail({
            name: "jeff",
            enhancment: 17,
            durability: 50
          })
        ).toEqual({
          name: "jeff",
          enhancment: 16,
          durability: 40
        });
      });
    });
  });
});
