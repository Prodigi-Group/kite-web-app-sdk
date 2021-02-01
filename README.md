# Prodigi Print Shop SDK

Compatible with the [Print on Demand Shop](https://shop.prodigi.com) by [Prodigi](https://www.prodigi.com/). Get yours at [Prodigi Apps Dashboard](https://dashboard.prodigi.com/apps)

The Print Shop SDK provides an API to launch your app with pre-configured data, such as images, at run-time.

## Table of Contents
- [Demo and examples](#demo-and-examples)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)

## Demo and examples

For a list of common use-cases and a demo sandbox visit: https://prodigi-web-sdks.web.app/print-shop

## Installation

Install using NPM:

```
npm install @kite-tech/web-app-sdk
```

## Usage

<!-- If installed using npm, import the package: -->
Import the package:
```js
import { KiteWebAppSdk } from '@kite-tech/web-app-sdk';
```
Launch your shop using the `launchFromJSON` function and pass in your desired configuration:
```js
const printShopConfig = {
    baseUrl: 'https://shop.prodigi.com/prodigi'
};

KiteWebAppSdk.launchFromJSON(printShopConfig);
```
For all configuration options, see [API](#api)

## API

| Property           | Type                                                    | Required | Description                                                             |
|--------------------|---------------------------------------------------------|----------|-------------------------------------------------------------------------|
| baseUrl            | string                                                  | YES      | The complete URL of your shop                                           |
| config             | [_ConfigObject_](#ConfigObject)                         | NO       | Specify additional properties while launch                              |
| checkoutUserFields | [_CheckoutUserFieldsObject_](#CheckoutUserFieldsObject) | NO       | User details to populate on checkout                                    |
| collectorImages    | [_CollectorImagesArray_](#CollectorImagesArray)         | NO       | Images passed on to your shop that can be applied on different products |

<br>

### ConfigObject

| Property      | Type    | Required | Description                                           |
|---------------|---------|----------|-------------------------------------------------------|
| startInNewTab | boolean | NO       | Opens your shop in a new tab/window. Default is false |
| customer_id   | string  | NO       | Custom identifier associated to your user             |

<br>

### CheckoutUserFieldsObject

| Property        | Type                                                                                                                                                                                                                                            | Required | Description                                                            |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|------------------------------------------------------------------------|
| shippingAddress | <pre> {<br>   recipient_first_name: string,<br>   recipient_last_name: string,<br>   address_line_1: string,<br>   address_line_2: string,<br>   city: string,<br>   county_state: string,<br>   postcode: string,<br>   country: string,<br> } | NO       | User shipping address to populate on checkout. All values are optional |
| customerEmail   | string                                                                                                                                                                                                                                          | NO       | Email set for the user when they reach checkout                        |
| termsOfService  | boolean                                                                                                                                                                                                                                         | NO       | Set to automatically agree to terms of service on checkout             |

<br>

### CollectorImagesArray

An array of objects having the following properties:

| Property         | Type                                                     | Required | Description                                                           |
|------------------|----------------------------------------------------------|----------|-----------------------------------------------------------------------|
| dimensions       | <pre> {<br>   width: number,<br>   height: number<br> }  | YES      | The dimensions of the image URL specified                             |
| id               | string                                                   | YES      | Unique ID for the image                                               |
| isUploadComplete | boolean                                                  | YES      | Specify if image upload is complete                                   |
| thumbnailUrl     | string                                                   | YES      | Lower resolution image URL used for rendering previews in the browser |
| url              | string                                                   | YES      | Full resolution image URL used for printing                           |
