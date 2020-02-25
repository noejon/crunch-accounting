import validatePostcode from "./validatePostcode";

describe('validatePostcode', () => {
  describe('when provided a proper postcode', () => {
    it('should return true', () => {
      expect(validatePostcode('1234')).toBeFalsy();
    });
  });

  describe('when provided an erroneous postcode', () => {
    describe('when the postcode contains characters other than numbers', () => {
      it('should return false', () => {
        expect(validatePostcode('not a postcode')).toBe("Please check the postcode format");
      });
    });
    
    describe('when the postcode is empty', () => {
      it('should return false', () => {
        expect(validatePostcode('')).toBe("Please check the postcode format");
      });
    });

    describe('when the postcode has only numbers but less than 4', () => {
      it('should return false', () => {
        expect(validatePostcode('123')).toBe("Please check the postcode format");
      });
    });

    describe('when the postcode has only numbers but more than 4', () => {
      it('should return false', () => {
        expect(validatePostcode('12345')).toBe("Please check the postcode format");
      });
    });
  });
});