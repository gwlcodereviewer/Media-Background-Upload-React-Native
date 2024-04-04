# Purchases 
Guide to implement in app purchase in the React native project, 

## Note about this component
Implement in app purchase in react native project easily with the help of this module.

## What it does
In this module we already have an implemented UI and functionality of taking subscription and also have designed UI for all active and buy subscription,we have add subscribed modal.
No need any extra code for adding subscription only need to change some ui and logic if required.

## Installation
Start with installing the package:
```
$ yarn add react-native-iap
cd ios; pod install; cd -
```

## Usage
copy subscription module to react native project and update ui as per requirement, add navigation in side menu or anywhere where we want to keep subscription option.

handleBuySubscription function is responsible to buy subscription , handleGetSubscriptions use for getting plan list from play/app store and migrate with api response.

subscriptionApi.ts file having some apis like create, update and get subscription we need to implement.
## Get plans
```
 const planIds = Platform.select({
        ios: subscriptionSKU.ios || [],
        android: subscriptionSKU.android || [],
      }) as [];
      const list = await getSubscriptions({ skus: planIds });
```
## create subscription
```
>call react native iap function and get receipt  

const receipt: any = await requestSubscription({
            sku: skuValue,
            ...(offerToken && {
              subscriptionOffers: [{ sku: skuValue, offerToken }],
            }),
          });

>call create subscription api  
 params = {
                platform: Platform.OS,
                data: receipt.transactionReceipt,
                orderId: receipt.transactionId,
                packageName: "",
                purchaseToken: "",
                productId: receipt.productId,
                transactionId: receipt.transactionId,
              };
  createSubscription(params);

```

subscriptionState.ts having some states to update ui.
