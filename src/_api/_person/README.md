# _person
graphql schema, queries and mutations for managing human-beings as they relate to the authnet

**authority**: [Discovery Service Attributes](https://qatest.resilient-networks.com/app/authority/222754)

**policy**: [Authnet OpenID Connect](https://qatest.resilient-networks.com/app/policy/222772)

**query-url**: https://ds-webshield.resilient-networks.com/v1/graphql

**schema**: [_person.schema.gql](https://github.com/webshield-dev/authnet-app/blob/master/app/server/_ado/_person/_person.schema.gql)

## Query

query person by email: `bob@jonesfamily.com`
```graphql
query Person($email: String!) {
  person(email: $email) {
    id
    identifiers {
      SSNs {
        value
      }
      emails {
        value
      }
      phoneNumbers {
        use
        value
      }
    }
    names {
      use
      fullName
    }
    postalAddresses {
      use
      addressFull
    }
    birthDate
    gender
  }
}
```

JSON response
```json
{
  "birthDate": "1981-01-02",
  "gender": "M",
  "id": "1001",
  "identifiers": {
    "SSNs": [
      {
        "value": "311-11-1111"
      }
    ],
    "emails": [
      {
        "value": "BOB@JONESFAMILY.COM"
      }
    ],
    "phoneNumbers": [
      {
        "use": [
          "CELL"
        ],
        "value": "702-222-2222"
      },
      {
        "use": [
          "WORK"
        ],
        "value": "800-201-2001"
      }
    ]
  },
  "names": [
    {
      "fullName": "ROBERT M JONES",
      "use": [
        "PRIMARY"
      ]
    }
  ],
  "postalAddresses": [
    {
      "addressFull": "111 FIRST ST LAS VEGAS NV 89111",
      "use": [
        "HOME"
      ]
    },
    {
      "addressFull": "PO BOX 111 LAS VEGAS NV 89111",
      "use": [
        "MAIL"
      ]
    }
  ]
}
```

