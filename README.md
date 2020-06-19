# Helium

Social network structured as a set of micro-services

Topics I want to cover:
- Microservice Architecture `(picture below)` - ✔️ Done ✔️
- API Authentication `(jwt)` - 🚧 WIP 🚧
- Cache `(redis)` - 🚧 WIP 🚧
- Testing `(jest)` - 🚧 WIP 🚧
- Scalability `(docker + kubernetes)` - 🚧 WIP 🚧


## Architecture

![pic](/readme-imgs/charts.png)

## API Authentication
The Auth server generates a web token that will be saved in the browser's localStorage to be used in future API calls



# Notes (a.k.a. things I wont implement but that are good to know)

## DB replication lag
Write to master, read from slaves... but make sure to cache the writtings in case the replication takes too long