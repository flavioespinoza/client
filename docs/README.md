# authnet-app client

```bash

yarn add apollo-link-context

```

ADO 12:55


111 FIRST ST LAS VEGAS NV 89111


curl --header "Content-Type: application/json" \
--data '{"query": "{person(email: \"JUPITER@JONESFAMILY.COM\"){id,identifiers{SSNs{value},emails{value},phoneNumbers{use, value}},names{use,fullName},postalAddresses{use,addressFull},birthDate,gender}}"}' \ 
--output search-results.json \ 
https://ds-webshield.resilient-networks.com/v1/graphql


  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   218  100    24  100   194     43    347 --:--:-- --:--:-- --:--:--   348
Flavor@Flavs:~/client/client$ 





```.sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"query": "{person(email: \"JUPITER@JONESFAMILY.COM\"){id,identifiers{SSNs{value},emails{value},phoneNumbers{use, value}},names{use,fullName},postalAddresses{use,addressFull},birthDate,gender}}"}' \
  https://as-ingest-webshield.resilient-networks.com:/publish/v1/person
```




	
	Download ds query schema
	```bash
	get-graphql-schema https://ds-webshield.resilient-networks.com/v1/graphql > ./src/api/person.schema.graphql
	```
	