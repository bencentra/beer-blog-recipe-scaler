import { pluralize } from './util'

export const STRINGS = {
  types: {
    PARTIAL_MASH: 'Partial Mash',
    EXTRACT: 'Extract',
    ALL_GRAIN: 'All Grain',
    BOIL: 'Boil',
    SECONDARY: 'Secondary',
  },
  units: {
    // Volume
    GALLON: (amount) => pluralize('Gallon', amount),
    // Weight
    LB: (amount) => pluralize('Pound', amount),
    OZ: (amount) => pluralize('Ounce', amount),
    // Time
    MINUTE: (amount) => pluralize('Minute', amount),
    DAYS: (amount) => pluralize('Day', amount),
    // Color
    SRM: (amount) => `${amount} SRM`,
    // Other
    PACKAGE: (amount) => pluralize('Package', amount),
  },
}
