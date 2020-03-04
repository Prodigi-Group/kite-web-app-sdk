# Kite Web App SDK

The Kite Web App SDK provides an interface to launch into the Kite web apps.

Included web apps:
- Print Shop

## Tables of contents
- [Example](#example)
- [Installation](#installation)
- [API](#api)

## Example

To view examples of the various versions of the app as well as access an application that enables a visual method of using the SDK go to:

- [https://prodigi-group.github.io/kite-web-app-sdk/docs/](https://prodigi-group.github.io/kite-web-app-sdk/docs/)

## Installation

via NPM

    `npm install @kite-tech/web-app-sdk`

### ES6 module

```js
import {
    KiteWebAppSdk,
} from '@kite-tech/web-app-sdk';
```

### Require

```js
const KiteWebAppSdk = require('@kite-tech/web-app-sdk');
```

### Suggested JavaScript Usage / Approach

The library currently has a single method, `launchPhotobook`, which launches the photobook app with
a number of images automatically included in the users photobook.

Import the script in the html or package it with your app

```html
// From CDN
<script src="https://unpkg.com/@kite-tech/web-app-sdk"></script>

// From local node_modules
<script src="/node_modules/@kite-tech/web-app-sdk"></script>
```

## API

### Launch with items

Launches an app with some images in the user's image collector, some existing
line items or both.

It may be useful to use the `KiteWebAppSdk.initaliseLineItem` or
the `KiteWebAppSdk.initialiseCollectorImage` to create the line items or the
collector images with default values.

```js
KiteWebAppSdk.launchWithItemsAndImages({
    baseUrl: 'http://dev-wall-art.kite.ly/canon/',
    collectorImages: [{
        dimensions: {
            width: 100,
            height: 150,   
        },
        id: 'imageId',
        isUploadComplete: true,
        thumbnailUrl: 'imageThumbnailUrl',
        url: 'imageUrl',
    }],
    lineItems: [
        images: [{
            filters: null,
            mirror: false,
            rotate_degrees: 0,
            scale: 1,
            aspect?: 'fit', // Optional Property to aspect fit the image inside specified template
            tx: 0,
            ty: 0,
            url_full: 'image1Url',
            url_preview: 'image1Preview'
        }],
        templateId: 'kiteTemplateId',
        variantName: 'variantName',
    ],
});
```

Other options are available.

### Intialise methods

### Initialise collector image

Generates a collector image with default values.

- `id` will default to a random GUID

```js
const collectorImage = KiteWebAppSdk.initialiseCollectorImage(
    'imageUrl',
    'imageThumbnailUrl',
    {
        width: 100,
        height: 150,   
    },
    'imageId'
);
```

This will return the following object:
```js
{
    dimensions: {
        width: 100,
        height: 150,   
    },
    id: 'imageId',
    isUploadComplete: true,
    thumbnailUrl: 'imageThumbnailUrl',
    url: 'imageUrl',
}
```

#### Initialise line item

Generates a line item with default values.

- `variantName` defaults to `cover` if not set.
- `id` defaults to a random UUID if not set.

```js
const lineItem = KiteWebAppSdk.initaliseLineItem(
    'kiteTemplateId',
    [{
        urlFull: 'image1Url',
        urlPreview: 'image1Preview',
    }],
    'lineItemId',
    'variantName',
);
```

This will return the following object:

```js
{
    images: [
        filters: null,
        mirror: false,
        rotate_degrees: 0,
        scale: 1,
        tx: 0,
        ty: 0,
        url_full: 'image1Url',
        url_preview: 'image1Preview'
    ],
    templateId: 'kiteTemplateId',
    variantName: 'variantName',
}
```

### Launch from JSON

Launches the app from the state JSON, for loading a stored user state.

```js
KiteWebAppSdk.launchFromJSON({
    appStateJSONString: JSON.stringify({
        appState: 'exampleState'
    }),
    baseUrl: 'http://dev-wall-art.kite.ly/canon/'
});
```

Other options are available.

### Other options

These other options can be used both for the `launchFromJSON` and the
`launchWithItemsAndImages` functions.

- All of these except `baseUrl` are optional.

- By default, user uploads _are enabled_ and the associated interface controls made visible. This functionality can be set manually either in the Angular module for a partner's app (`brandSettings.featureSettings.userUploadsAllowed`) or through the SDK (`otherSettings.userUploadsAllowed`). Note that any user uploads setting defined via the SDK will override the corresponding setting, if set, in the partner's app module file.

```typescript
{
    baseUrl: string;
    brandSettings?: {
        brandColor?: string; // Color to be used on the checkout
        brandName?: string; // Brand name to get branch info
        checkoutLogoImage?: string; // Logo Image used on checkout
        checkoutLogoLinkUrl?: string; // Logo link for logo image on checkout
        mixpanelToken: string; // Mixpanel token to use for tracking
        publishableKey: string; // Kite partner public key
        testPublishableKey: string; // Kite partner public key for testing
        universalAnalyticsToken?: string; // GA Token for tracking
        userUploadsAllowed?: boolean; // Set whether the user can upload own images.
    };
    checkout?: {
        checkoutUrl?: string; // Url of the checkout to call
        cancelCallbackUrls?: Array<{
            // Array of urls and methods that gets called when the user presses
            // cancel on the checkout
            method?: string;
            url?: string;
        }>;
        successCallbackUrls?: Array<{
            // Array of urls and methods that gets called when the user makes
            // a successful purchase
            method?: string;
            url?: string;
        }>;
        // User gets redirected to this URL when completing the checkout
        successRedirectUrl?: string;
    };
    checkoutUserFields?: {
        shippingAddress?: {
            // Prepopulated details when the user gets to the checkout
            recipient_first_name?: string;
            recipient_last_name?: string;
            address_line_1?: string;
            address_line_2?: string;
            city?: string;
            county_state?: string;
            postcode?: string;
            country?: string;   
        };
        // Email set for the user when they reach the checkout
        customerEmail?: string;
        // Set to automatically opt the user in for marketting
        termsOfService?: boolean;   
    };
     // Reference Id for the customers order. Used by things like the checkout
     // callbacks to inform which user it is.
    referenceId?: string;
    otherSettings?: {
        userUploadsAllowed?: boolean;
    };
    // Data that can be passed by a partner into the SDK to enable customer
    // tracking.
    userData?: {
        customer_id?: string;
        design_id?: string;
        external_reference?: string;
    };
    // Custom content to include in the footer. Allows for an array of
    // links.
    footer?: {
        links?: [
            {
                // Text for link if no translations provided.
                defaultText: string;
                // `language_code` is the two letter ISO 639-1 code for the language.
                // E.g., `en` for English.
                translations?: {
                    [language_code: string]: [text: string]
                },
                url: string;
                // Set `newFrame` to `true` to open URL in new window/tab.
                newFrame: boolean;              
            }
        ]
    };
}
```
