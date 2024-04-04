# localization 

Guide to implement download manager in the React native project, 

## Note about this component
As we know that, when we we implement download feature, we have got to face some problem regarding structure background download and progress. We have added all the feature of download for the develop, it will help developer to integrate download easily with quick time no need to spent more time to integrate.

## What it does

The help of this module we can integrate downloading feature in our app easily. and also its having a modal for progress of downloading .

## Installation
There  are some react native libraries which we need to install before use
```
$ yarn add rn-fetch-blob
$ yarn add react-native-fs
```


## Usage
To use this module, First of all we need 3 components have to keep, downloadManager, downloadComponent, downloadingStatusModal.We use downloadManager for downloading file and media from server and use 'rn-fetch-blob'
in this module.
and use of downloadingComponent manage state of download controls like how to start the download and remove from state.
downloadingStatusModal is popup which have InProgress and InQueue section, in InProgress having single item where we are showing downloading of first index item.
InQueue section having multiple items, After completing in progress item  first item of InQueue list move to InProgress item.




