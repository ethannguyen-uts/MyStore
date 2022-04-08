# MyStore

## Overview

- Project provide an e-commerce website that allows users to view a list of available products to purchase, add them to a shopping cart, and checkout process.
- This is the front-end webpage for My Store web page. If you want visit the back-end, please follow this [link](https://github.com/ethannguyen-uts/StorefrontBackend).

## Techstack:

- Angular
- Karma

## Project features:

The application reflects the same user experience as that of a real-world e-commerce website, support reponsive experience, including a(n):

1. Product list page: `/products`, which displays the available products for the user to choose and add to their cart (in various quantities).
   <br />
2. Product details page: `/products/:productName`, which displays more information about any particular product.
   <br />
3. Shopping cart: `/cart`, which includes the products that the user has added to their cart.
   <br />
4. Checkout form: `/checkout`, which collects information about the user (e.g., name, address, payment details, etc.).
   <br />
5. Order confirmation page: `/confirmation`, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

### Demo

![gif signup](/src/assets/img/demo.gif)

## To clone the project

Run `git clone https://github.com/ethannguyen-uts/MyStore-Angular-App.git`

## Build

Navigate to project folder and run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Start the website

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploy

- Please follow this [link](https://github.com/ethannguyen-uts/MyStore-fullstack) to the deploy repository.
- The project was hosted on AWS Cloud Service (AWS Elastic Beanstalk, AWS S3, AWS RDS) that satisfy the CI/CD using CircleCI pipeline: http://mystore-frontend-bucket.s3-website-us-west-2.amazonaws.com
