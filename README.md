# beer-blog-recipe-scaler

Utility for scaling beer recipes encoded in a simple JSON format

## Recipe JSON Format

```json
{
  "name": "My Recipe",
  "type": "PARTIAL_MASH",
  "size": {
    "value": 5,
    "unit": "GALLON"
  },
  "style": {
    "name": "Witbier",
    "bjcp_2015": "24A"
  },
  "gravity": {
    "original": 1.05,
    "final": 1.015
  },
  "ibu": 12,
  "color": {
    "value": 3.6,
    "unit": "SRM"
  },
  "fermentables": [
    {
      "name": "Pilsen LME",
      "amount": {
        "value": 3.3,
        "unit": "LB"
      },
      "color": {
        "value": 3.5,
        "unit": "SRM"
      }
    },
    {
      "name": "Wheat Malt",
      "amount": {
        "value": 4.5,
        "unit": "LB"
      },
      "color": {
        "value": 2,
        "unit": "SRM"
      }
    }
  ],
  "hops": [
    {
      "name": "Hallertau",
      "amount": {
        "value": 0.75,
        "unit": "OZ"
      },
      "alpha_acids": {
        "value": 4.5,
        "unit": "PERCENT"
      },
      "time": {
        "type": "BOIL",
        "value": 60,
        "unit": "MINUTE"
      }
    },
    {
      "name": "Cascade",
      "amount": {
        "value": 1,
        "unit": "OZ"
      },
      "alpha_acids": {
        "value": 5.7,
        "unit": "PERCENT"
      },
      "time": {
        "type": "SECONDARY",
        "value": 2,
        "unit": "DAYS"
      }
    }
  ],
  "misc": [
    {
      "name": "Bitter Orange Peel",
      "amount": {
        "value": 0.25,
        "unit": "OZ"
      },
      "time": {
        "type": "BOIL",
        "value": 5,
        "unit": "MINUTE"
      }
    },
    {
      "name": "Ground Coriander",
      "amount": {
        "value": 0.1,
        "unit": "OZ"
      },
      "time": {
        "type": "BOIL",
        "value": 5,
        "unit": "MINUTE"
      }
    }
  ],
  "yeast": [
    {
      "name": "White Labs WLP550 \"Belgian Ale\"",
      "amount": {
        "value": 2,
        "unit": "PACKAGE"
      }
    }
  ]
}
```
