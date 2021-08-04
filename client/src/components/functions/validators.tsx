const VALIDATOR_TYPE_REQUIRE: string = "REQUIRE";
const VALIDATOR_TYPE_MINLENGTH: string = "MINLENGTH";
const VALIDATOR_TYPE_MAXLENGTH: string = "MAXLENGTH";
const VALIDATOR_TYPE_MIN: string = "MIN";
const VALIDATOR_TYPE_MAX: string = "MAX";
const VALIDATOR_TYPE_EMAIL: string = "EMAIL";
const VALIDATOR_TYPE_FILE: string = "FILE";

interface Validator {
  type: string;
  value?: number;
}

interface Validation {
  (value: string, validators: Validator[]): boolean;
}

export const VALIDATOR_REQUIRE = (): Validator => ({
  type: VALIDATOR_TYPE_REQUIRE,
});
export const VALIDATOR_FILE = (): Validator => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (value: number): Validator => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  value,
});
export const VALIDATOR_MAXLENGTH = (value: number): Validator => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  value,
});
export const VALIDATOR_MIN = (value: number): Validator => ({
  type: VALIDATOR_TYPE_MIN,
  value,
});
export const VALIDATOR_MAX = (value: number): Validator => ({
  type: VALIDATOR_TYPE_MAX,
  value,
});
export const VALIDATOR_EMAIL = (): Validator => ({
  type: VALIDATOR_TYPE_EMAIL,
});

export const validate: Validation = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    /** Has the value parameter */
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.value!;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.value!;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.value!;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.value!;
    }
  }
  return isValid;
};
