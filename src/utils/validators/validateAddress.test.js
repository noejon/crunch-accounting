import validateAddress from "./validateAddress";
import validatePostcode from "./validatePostcode";

jest.mock("./validatePostcode");

describe("validateAddress", () => {
  let validAddress = {};

  beforeEach(() => {
    validAddress = {
      streetAddress: "20 rue des fougeres",
      city: "Haguenau",
      state: "NSW",
      postcode: "1234"
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  })

  describe("when provided an erroneous address", () => {
    describe("when the street address is missing", () => {
      it("should return false", () => {
        delete validAddress.streetAddress;
        expect(validateAddress(validAddress)).toBe(false);
      });
    });
    describe("when the city is missing", () => {
      it("should return false", () => {
        delete validAddress.city;
        expect(validateAddress(validAddress)).toBe(false);
      });
    });
    describe("when the state is missing", () => {
      it("should return false", () => {
        delete validAddress.state;
        expect(validateAddress(validAddress)).toBe(false);
      });
    });
    describe("when the postcode is missing", () => {
      it("should return false", () => {
        delete validAddress.postcode;
        expect(validateAddress(validAddress)).toBe(false);
      });
    });
    describe("when the postcode is invalid", () => {
      beforeEach(() => {
        validatePostcode.mockReturnValue("Error");
      });

      it("should return false", () => {
        expect(validateAddress(validAddress)).toBe(false);
      });
    });
  });
  describe("when provided a valid address", () => {
    it("should return true", () => {
      expect(validateAddress(validAddress)).toBe(true);
    });
  });
});
