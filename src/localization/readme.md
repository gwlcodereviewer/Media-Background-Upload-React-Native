# localization 

Guide to implement localization in the React native project, 

## Note about this component
The component provide a feature where we can use multiple languages in react native project and we can have an option to change language.
Note: it also have an option to support rtl if language is arabic or urdu.

## What it does

I just needed a dead simple way to internationalize React Native app.

In this implementation we can keep the localized strings and support rtl for arabic and urdu languages in the same component uses a popup for language changes.
we would have an option to render localized string with React view in the same manner as required.

## Installation
There  are some react native libraries which we need to install before use
```
$ yarn add react-native-localization
$ yarn add react-native-easy-localization-and-rtl
$ yarn add react-native-restart
```


## Usage
In the React class that you want to localize require the component and define the strings object passing to the constructor a simple object containing a language key (i.e. en, it, fr..) and then a list of key-value pairs with the needed localized strings.

Then use the `strings` object literal directly in the render method accessing the key of the localized string.

```js
<Text style={styles.title}>
  {strings.how}
</Text>
```

The first language is considered the default one, so if a translation is missing for the selected language, the default one is shown and a line is written to the log as a reminder.


## Add code in App.tsx file 
The initLanguage uses first launch of app where we need to identify current language of app where we can keep desired app.
```
   initLanguage(() => {
      //callback
    });

```
## Add parent view in App.tsx, if RTL support required
Use  [react-native-easy-localization-and-rtl](https://github.com/hameez21/react-native-easy-localization-and-rtl) RTProvider for RTL support
```
  <RTLProvider>
  Child item like stack navigator
  </RTLProvider>
```
## Add model where we want to show
Use LanguageModal to change language, it has an option to manage language changes.
```
 <LanguageModal
        selectedLanguageCode={language}
        onChange={() => {
          setModalVisible(false);
        }}
        modalVisible={modalVisible}
        onLanguageChange={() => {
          setModalVisible(false);
        }}
      />
```

