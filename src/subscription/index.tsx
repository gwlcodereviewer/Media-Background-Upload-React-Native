import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  AppState,
  Linking,
  Platform,
  ScrollView,
  Switch,
} from "react-native";
import {
  ProductPurchase,
  PurchaseError,
  SubscriptionPurchase,
  finishTransaction,
  getAvailablePurchases,
  getSubscriptions,
  initConnection,
  purchaseUpdatedListener,
  requestSubscription,
} from "react-native-iap";
import { useDispatch, useSelector } from "react-redux";
import {
  ANDROID_IN_APP_SUBSCRIPTION_URL,
  APPLE_IN_APP_SUBSCRIPTION_URL,
  PLAN_STATUS,
  SUBSCRIBED_FROM,
  subscriptionSKU,
} from "./subscriptionUtils";
import {
  ListContainer,
  RowCenterView,
  ScreenWrapper,
  SwitchText,
  UpperText,
} from "./styled";
import SubscribedView from "./subscribedView";
import SubscriptionRow from "./subscriptionRow";
import { colors } from "../styles";
import { strings } from "../localization";
import { IListingApiResponse, IPlanDetail, IUserInfoResponse } from "../types/utils";
import {
  TOAST_MESSAGE_TYPE,
  isIOS,
  showAlert,
  showServerError,
  showToastMessage,
} from "../utils";
import { NAV_HOME, NAV_LOGIN } from "../navigation/constants";
import { INavigation } from "../types";
import {
  useCreateSubscriptionMutation,
  useGetSubscriptionListingMutation,
  useUpdateSubscriptionMutation,
} from "../redux/api/subscriptionApi";
import { setSubscriptionStatus } from "../redux/api/subscriptionState";
import { RootState } from "../redux/store";

/**
 * Name: Props
 * Desc: Interface declaration for Props
 */
interface Props {
  navigation?: INavigation;
  route?: INavigation;
}

/**
 * Name: Subscription screen
 * Desc: Screen to render in app purchase screen UI
 * @param {any} navigation - navigation data
 * @returns JSX element
 */
const Subscription: React.FC<Props> = (props: Props) => {
  const subscriptionStatus = useSelector(
    (state: RootState) => state.subscription.subscriptionStatus
  );
  const isSubscriptionActive =
    subscriptionStatus === PLAN_STATUS.active ||
    subscriptionStatus === PLAN_STATUS.cancelled
      ? true
      : false;
  const isSubscriptionCancelled =
    subscriptionStatus === PLAN_STATUS.cancelled ? true : false;
  const isSubscriptionExpired =
    subscriptionStatus === PLAN_STATUS.expired ? true : false;
  const isSubscriptionNotPurchased =
    subscriptionStatus === PLAN_STATUS.notPurchased ? true : false;
  const dispatch = useDispatch();
  const { navigation } = props;
  const { fromSideMenu } = props?.route?.params;
  const {
    billMonthly,
    billAnnually,
    subscriptionsText,
    selectPlan,
    activeSubscription,
  } = strings;
  const [subscriptionList, setSubscriptionList] = useState<IPlanDetail[]>([]);
  const [isMonthly, setIsMonthly] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [isCreateSubscriptionInProgress, setCreateSubscriptionLoading] =
    useState<boolean>(false);

  const [subscribedPlan, setSubscribedPlan] = useState<IUserInfoResponse>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [planList, setPlanList] = useState<any[]>([]);
  const appState = useRef(AppState.currentState);

  const [
    updateSubscription,
    {
      isLoading: isUpdateIapLoading,
      isError: isUpdateIapError,
      error: updateIapError,
      isSuccess: isUpdateIapSuccess,
      data: updateIapData,
    },
  ] = useUpdateSubscriptionMutation();

  const [
    getSubscriptionListing,
    {
      isLoading: isListingLoading,
      isError: isListingError,
      error: listingError,
      isSuccess: isListingSuccess,
      data: listingData,
    },
  ] = useGetSubscriptionListingMutation();

  const [
    createSubscription,
    {
      isLoading: isCreateSubscriptionLoading,
      isError: isCreateSubscriptionError,
      isSuccess: isCreateSubscriptionSuccess,
      data: createSubscriptionData,
      error: createSubscriptionError,
    },
  ] = useCreateSubscriptionMutation();
  /**
   * Name: useEffect
   * Desc: useEffect to call create subscription api
   */
  useEffect(() => {
    if (isUpdateIapSuccess) {
      getSubscriptionListing("");
    }
    if (isUpdateIapError) {
      getSubscriptionListing("");
    }
  }, [isUpdateIapLoading, isUpdateIapSuccess, isUpdateIapError]);
  /**
   * Name: useEffect
   * Desc: useEffect to call create subscription api
   */
  useEffect(() => {
    if (isCreateSubscriptionSuccess) {
      if (createSubscriptionData?.status) {
        showToastMessage(
          strings.appName,
          createSubscriptionData?.message,
          TOAST_MESSAGE_TYPE.success
        );
        navigation?.navigate(NAV_HOME);
        setCreateSubscriptionLoading(false);
      } else {
        setCreateSubscriptionLoading(false);
        showToastMessage(
          strings.appName,
          createSubscriptionData?.message,
          TOAST_MESSAGE_TYPE.error
        );
      }
    }
    if (isCreateSubscriptionError) {
      setCreateSubscriptionLoading(false);
      showToastMessage(
        strings.appName,
        strings.somethingWrong,
        TOAST_MESSAGE_TYPE.error
      );
    }
  }, [
    isCreateSubscriptionLoading,
    isCreateSubscriptionSuccess,
    isCreateSubscriptionError,
    createSubscriptionData,
    navigation,
  ]);
  const updateListing = () => {
    setIsMonthly(true);
    updateInAppSubscription();
    handleGetSubscriptions();
  };
  const handleAppStateChange = (nextAppState: any) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active" &&
      !loading
    ) {
      updateListing();
    }
    appState.current = nextAppState;
  };

  /**
   * Name: useEffect
   * Desc: useEffect to call listing api
   */
  useEffect(() => {
    purchaseUpdatedListener(
      async (purchase: SubscriptionPurchase | ProductPurchase) => {
        const receipt = purchase.transactionReceipt;
        if (receipt) {
          try {
            try {
              await finishTransaction({ purchase, isConsumable: false });
            } catch (ackErr) {
              console.warn("RNIap ackErr", ackErr);
            }
          } catch (ackErr) {
            console.warn("purchaseErr", ackErr);
          }
        }
      }
    );
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );
    const focusSubscription = navigation?.addListener("focus", () => {
      if (!loading) {
        updateListing();
      }
    });
    return () => {
      if (focusSubscription && focusSubscription.remove) {
        focusSubscription.remove();
      }
      if (subscription && subscription.remove) {
        subscription.remove();
      }
    };
  }, []);

  /**
   * Name: handleGetSubscriptions
   * Desc: Function to get the subscription package lists
   */
  const handleGetSubscriptions = async () => {
    try {
      await initConnection();
      const planIds = Platform.select({
        ios: subscriptionSKU.ios || [],
        android: subscriptionSKU.android || [],
      }) as [];
      const list = await getSubscriptions({ skus: planIds });
      if (list && list.length) {
        setPlanList(list);
      }
    } catch (error) {
      showServerError(error, navigation);
    }
  };

  /**
   * Name: useEffect
   * Desc: useEffect to toggle monthly and annually
   */
  useEffect(() => {
    if (listingData && listingData?.plans) {
      filterListingData();
    }
  }, [isMonthly]);

  /**
   * Name: useEffect
   * Desc: useEffect for subscription listing API response.
   */
  useEffect(() => {
    if (isListingSuccess) {
      if (listingData) {
        const subscriptionStat = listingData?.userInfo?.planStatus
          ? listingData?.userInfo?.planStatus
          : "";
        dispatch(setSubscriptionStatus(subscriptionStat));
        filterListingData();
        setSubscribedPlan(listingData.userInfo);
        setLoading(false);
      }
    }
    if (isListingError) {
      showServerError(listingError, navigation);
    }
  }, [
    isListingLoading,
    isListingSuccess,
    isListingError,
    listingData,
    listingError,
  ]);

  /**
   * Name: toggleSwitch
   * Desc: Function to update the toggle status
   */
  const toggleSwitch = () => setIsMonthly((previousState) => !previousState);
  /**
   * Name: updateInAppSubscription
   * Desc: updateInAppSubscription for subscription updating current subscription.
   */
  const updateInAppSubscription = async () => {
    setLoading(true);
    try {
      let purchases: any[] = [];
      if (!isIOS()) {
        purchases = await getAvailablePurchases();
      }
      if (purchases?.length > 0) {
        const receipt = purchases[0];
        const paymentParams = {
          platform: isIOS() ? "ios" : "android",
          purchaseToken: receipt.purchaseToken,
        };
        updateSubscription(paymentParams);
      } else {
        const paymentParams = {
          platform: isIOS() ? "ios" : "android",
          purchaseToken: "",
        };
        updateSubscription(paymentParams);
      }
    } catch (error) {
      setLoading(true);
      const paymentParams = {
        platform: isIOS() ? "ios" : "android",
        purchaseToken: "",
      };
      updateSubscription(paymentParams);
    }
  };
  /**
   * Name: setSubscriptionListBasedOnFrequency
   * Desc: to set subscription list with condition wise.
   */
  const setSubscriptionListBasedOnFrequency = (isMonthly: boolean, listingData: IListingApiResponse) =>{
    setSubscriptionList(
      isMonthly ? listingData.plans.monthly : listingData.plans.annually
    );
  }
  /**
   * Name: filterListingData
   * Desc: Function to filter listing data based on subscription status
   */
  const filterListingData = () => {
    if (listingData) {
      setSubscriptionListBasedOnFrequency(isMonthly, listingData);
    }
    if (listingData?.userInfo?.planStatus === PLAN_STATUS.notPurchased) {
      if (listingData) {
        setSubscriptionListBasedOnFrequency(isMonthly, listingData);
      }
    } else if (
      listingData?.userInfo?.planStatus === PLAN_STATUS.expired ||
      listingData?.userInfo?.planStatus === PLAN_STATUS.cancelled
    ) {
      if (listingData) {
        if (isMonthly) {
          const filteredList = listingData.plans.monthly?.filter((item) => {
            return (
              item?.android_sku !== subscriptionSKU.android[0] &&
              item?.ios_sku !== subscriptionSKU.ios[0]
            );
          });
          setSubscriptionList(filteredList);
        } else {
          const filteredList = listingData.plans.annually?.filter((item) => {
            return (
              item?.android_sku !== subscriptionSKU.android[3] &&
              item?.ios_sku !== subscriptionSKU.ios[3]
            );
          });
          setSubscriptionList(filteredList);
        }
      }
    }
  };
  /**
   * Name: getOfferToken
   * Desc: to take offerToken
   */
  const getOfferToken = (skuValue: string) => {
    const filteredList = planList.filter((item) => {
      if (item?.productId === skuValue) {
        return item;
      }
    });
    return Platform.OS === "android" && filteredList.length > 0
      ? filteredList[0]?.subscriptionOfferDetails[0]?.offerToken
      : null;
  };
  /**
   * Name: getAndroidBuyRequestParams
   * Desc: to get request params for buy subscription android
   */
  const getAndroidBuyRequestParams = (receiptArray: any[]) => {
    const receipt = receiptArray[0];
    return {
      platform: Platform.OS,
      data: receipt[0].transactionReceipt,
      orderId: receipt[0].transactionId,
      packageName: receipt[0].packageNameAndroid,
      purchaseToken: receipt[0].purchaseToken,
      productId: receipt[0].productId,
      transactionId: receipt[0].transactionId,
    };
  };
  /**
   * Name: getIosBuyRequestParams
   * Desc: to get request params for buy subscription  ios
   */
  const getIosBuyRequestParams = (receipt: any) => {
    return {
      platform: Platform.OS,
      data: receipt.transactionReceipt,
      orderId: receipt.transactionId,
      packageName: "",
      purchaseToken: "",
      productId: receipt.productId,
      transactionId: receipt.transactionId,
    };
  };
  /**
   *
   */
  const safelyInitConnection = async () => {
    try {
      const result = await initConnection();
      return result;
    } catch (err) {
      setCreateSubscriptionLoading(false);
      return null;
    }
  };
  /**
   * Name: handleBuySubscription
   * Desc: Function to purchase the subscription
   */
  const handleBuySubscription = async (data: any) => {
    setCreateSubscriptionLoading(true);
    const result = await safelyInitConnection();
    if (result) {
      const skuValue = isIOS() ? data?.ios_sku : data?.android_sku;
      const offerToken = getOfferToken(skuValue);
      try {
        const receipt: any = await requestSubscription({
          sku: skuValue,
          ...(offerToken && {
            subscriptionOffers: [{ sku: skuValue, offerToken }],
          }),
        });
        if (receipt !== null) {
          let params: any = {};
          if (Platform.OS === "android") {
            params = getAndroidBuyRequestParams(receipt);
          } else {
            params = getIosBuyRequestParams(receipt);
          }
          createSubscription(params);
        }
      } catch (error) {
        setCreateSubscriptionLoading(false);
        if (error instanceof PurchaseError) {
          // Handle PurchaseError specifically, e.g., show a relevant error message to the user.
          showServerError(error, navigation);
        } else {
          // Handle other types of errors differently.
          showServerError(error, navigation);
        }
      }
    }
  };

  /**
   * Name: cancelAppleSubscription
   * Desc: Function to cancel the subscription from apple
   */
  const cancelAppleSubscription = async () => {
    Linking.openURL(APPLE_IN_APP_SUBSCRIPTION_URL);
  };

  /**
   * Name: cancelAndroidInAppSubscription
   * Desc: Function to cancel the subscription from play store
   * @param {string} purchaseId - Purchase ID
   */
  const cancelAndroidInAppSubscription = async (purchaseId: string) => {
    Linking.openURL(ANDROID_IN_APP_SUBSCRIPTION_URL + purchaseId);
  };
 /**
   * Name: performCancellationBasedOnPlatform
   * Desc: Function to start cancel subscription process
   */
  const performCancellationBasedOnPlatform = async (androidSku: string, iosSku: string, subscribedFrom: string) =>{
    if (androidSku !== "" || iosSku !== "") {
      if (isIOS() && subscribedFrom === SUBSCRIBED_FROM.appStore) {
        await cancelAppleSubscription();
      } else if (!isIOS() && subscribedFrom === SUBSCRIBED_FROM.playStore) {
        await cancelAndroidInAppSubscription(androidSku);
      } else if (
        isIOS() &&
        subscribedFrom !== SUBSCRIBED_FROM.appStore &&
        subscribedFrom !== SUBSCRIBED_FROM.web
      ) {
        showAlert("", strings.fromAndroid, strings.ok);
      } else if (
        !isIOS() &&
        subscribedFrom !== SUBSCRIBED_FROM.playStore &&
        subscribedFrom !== SUBSCRIBED_FROM.web
      ) {
        showAlert("", strings.fromApple, strings.ok);
      } else if (subscribedFrom === SUBSCRIBED_FROM.web) {
        showAlert("", strings.fromWeb, strings.ok);
      }
    }
  }
  /**
   * Name: cancelSubscriptionPlan
   * Desc: Function to start cancel subscription process
   */
  const cancelSubscriptionPlan = async () => {
    const androidSku = listingData?.userInfo?.androidSku
      ? listingData?.userInfo?.androidSku
      : "";
    const iosSku = listingData?.userInfo?.iosSku
      ? listingData?.userInfo?.iosSku
      : "";
    const subscribedFrom = listingData?.userInfo?.platform
      ? listingData?.userInfo?.platform
      : "";
      performCancellationBasedOnPlatform(androidSku, iosSku, subscribedFrom);
    
  };
  /**
   * Name: isNeedToBuy
   * Desc: to check can show buy subscription
   */
  const isNeedToBuy = () => {
    return (
      isSubscriptionExpired ||
      isSubscriptionNotPurchased ||
      (isSubscriptionCancelled && !isListingLoading)
    );
  };
  /**
   * Name: planSwitchView
   * Desc: to show plan switch ui
   */
  const planSwitchView = () => {
    return (
      <React.Fragment>
        <UpperText>{selectPlan}</UpperText>
        <RowCenterView>
          <SwitchText>{billMonthly}</SwitchText>
          <Switch
            trackColor={{
              false: colors.greenColor,
              true: colors.greenColor,
            }}
            thumbColor={colors.white}
            ios_backgroundColor={colors.greenColor}
            onValueChange={toggleSwitch}
            value={!isMonthly}
          />
          <SwitchText>{billAnnually}</SwitchText>
        </RowCenterView>
      </React.Fragment>
    );
  };

  /**
   * Name: planListUI
   * Desc: to show plan list
   */
  const planListUI = () => {
    return (
      <ListContainer>
        {subscriptionList.map((item, index) => {
          return (
            <SubscriptionRow
              key={`Plans_${index}`}
              item={item}
              onPurchase={(itemPurchase: any) => {
                setSelectedIndex(index);
                handleBuySubscription(itemPurchase);
              }}
              showLoader={loading && selectedIndex === index ? true : false}
            />
          );
        })}
      </ListContainer>
    );
  };
  return (
    <ScreenWrapper>
      <ScrollView>
        <React.Fragment>
          {(isSubscriptionActive || isSubscriptionCancelled) && (
            <React.Fragment>
              <UpperText>{activeSubscription}</UpperText>
              <SubscribedView
                item={subscribedPlan}
                showLoader={loading}
                callCancelProcess={cancelSubscriptionPlan}
                isCancelled={isSubscriptionCancelled}
                isFamilyAdmin={
                  listingData?.userInfo?.isFamilyPlanAdmin || false
                }
                familyPlanStatus={listingData?.userInfo?.familyPlanStatus || ""}
              />
            </React.Fragment>
          )}
          {isNeedToBuy() && planSwitchView()}
          {isNeedToBuy() && planListUI()}
        </React.Fragment>
      </ScrollView>
    </ScreenWrapper>
  );
};
export default Subscription;
