# Reviews Module for WhereBnB

This is the Reviews module for WhereBnB, a web application for booking vacation rentals. The front-end consists of reusable React components. The back-end consists of a Node.js server with a PostgreSQL database. A Cassandra database was used as comparison, but the PostgreSQL database was selected. 

The service and proxy server were deployed on several AWS EC2 instances, utilizing horizontal scaling through Nginx load balancers. Performance targeted >1000 RPS throughput and <2000ms latency. Additionally, Redis cache was applied for quick responses for get requests to popular hotel listings. 


## Related Projects

  - https://github.com/rd-b-ms/photo-module
  - https://github.com/rd-b-ms/bookings-module
  - https://github.com/rd-b-ms/listingInfo-module
  - https://github.com/rd-b-ms/proxy-bookings


## Requirements

- Node 8.15.1
- PostgreSQL 11.3
- Redis-server 5.0.5
- Nginx 1.17.0

### Installing Dependencies

From within the root directory:

```sh
npm install // Installs your dependencies
npm run seed // Seed your database
nom run react-dev // Makes your bundle
npm run start // Starts your server
```

npm install
npm run webpack-prod
npm run start
