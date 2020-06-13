# Helium

Social network structured as a set of micro-services

Topics I want to cover:
- Microservice Architecture
- API Authentication through web tokens
- Scalability
- Testing
- Cache


## Microservices

![pic](/readme-imgs/charts.png)

## API Authentication
The Auth server generates a web token that will be saved in the browser's localStorage to be used in future API calls



# Notes (a.k.a. things I wont implement but that are good to know)

## Actual software
- HA Proxy: Load Balancer
- Supervice: Restarts the server when it crashes

## DB replication lag
Write to master, read from slaves... but make sure to cache the writtings in case the replication takes too long