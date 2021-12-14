## Summary
This is the Database and APIs for [Mind Your Money](https://mind-your-money-webapp.web.app/), a webapp designed to provide finiancial health gauges based on a users budgeting information.

## Database
MongoDB serviced using Atlas

## Application Server Framework
Express

## Language
TypeScript

## Runtime Environment 
Node.Js

## Security
JWT

## Deployed
The backend was deployed using GCP's App Engine. 

### Setup
1. Clone this repo
2. run `yarn` to install dependencies 
3. run `yarn run dev` to test this code locally
4. run `yarn gcp-build` to deploy changes once you've set up your own App Engine

### Notes:
Full CRUD is available in the services allowing for future features not currently included in Mind Your Money.
Financials on the dashboard were calculated in the Frontend. 
