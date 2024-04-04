import React from "react";
import {
  ChapterContainer,
  ChapterText,
  ChildContainer,
  ChildRightContainer,
  PlanTypeText,
  PriceText,
  RowContainer,
  RowMainContainer,
} from "./styled";
import { strings } from "../localization";
import { PrimaryButton } from "../components/common";
import { IPlanDetail } from "../types/utils";
import styles from "../styles/styleSheet";

interface RowProps {
  item: IPlanDetail;
  onPurchase: (item: any) => void;
  showLoader?: boolean;
}

const SubscriptionRow: React.FC<RowProps> = ({
  item,
  onPurchase,
  showLoader,
}: RowProps) => {
  const { buy } = strings;
  return (
    <RowMainContainer>
      <RowContainer>
        <ChildContainer>
          <PriceText>{item.price_label}</PriceText>
          <ChapterContainer>
            <ChapterText>{item.access}</ChapterText>
          </ChapterContainer>
        </ChildContainer>
        <ChildRightContainer>
          <PlanTypeText>{item.plan}</PlanTypeText>
          <PrimaryButton
            buttonStyle={styles.primaryButtonStyle}
            title={buy}
            onPress={() => onPurchase(item)}
            showLoader={showLoader}
          />
        </ChildRightContainer>
      </RowContainer>
    </RowMainContainer>
  );
};

export default SubscriptionRow;
