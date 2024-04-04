/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { IUploadDetail } from "../redux/api/uploadState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  IDownloadDetail,
  setDownloadData,
  setDownloadingComplete,
  setDownloadingProgress,
  setDownloadingUpdate,
} from "../redux/api/downloadState";
import downloadManager from "./downloadManager";

/**
 * Name: Props
 * Desc: Interface declaration for Props
 */
interface Props {
  navigation?: any;
}

/**
 * Name: GlobalUpload
 * Desc: Component to manage the uploads globally
 * @param {any} navigation - navigation data
 * @returns JSX element
 */
const DownloadingComponent: React.FC<Props> = (props: Props) => {
  const downloadData = useSelector(
    (state: RootState) => state.download.downloadData
  );
  const downloadingUpdate = useSelector(
    (state: RootState) => state.download.downloadingUpdate
  );

  const dispatch = useDispatch();
  /**
   * Name: downloadCompleteTask
   * Desc: to complete download 
   */
  const downloadCompleteTask = async () => {
    if (downloadData[0]) dispatch(setDownloadingUpdate(downloadData[0]));
    dispatch(setDownloadingProgress(0));
  };
  /**
   * Name: downloadProgressTask
   * Desc: to get progress of downloading
   */
  const downloadProgressTask = (progress: number) => {
    dispatch(setDownloadingProgress(progress));
  };
  const startDownloading = async () => {
    const newState = downloadData.map((obj, index) => {
      if (index === 0) {
        return { ...obj, isInProgress: true };
      }
      return { ...obj };
    });
    await dispatch(setDownloadData(newState));
    console.log("newState", newState);
    downloadManager(
      newState[0].url,
      newState[0].name,
      () => downloadCompleteTask(),
      (percent: number) => downloadProgressTask(percent)
    );
  };
  /**
   * Name: useEffect
   * Desc: handle downloading start redux state
   */
  useEffect(() => {
    console.log("start downloading", downloadData);
    if (
      downloadData &&
      downloadData.length > 0 &&
      !downloadData[0].isInProgress
    ) {
      startDownloading();
    }
  }, [downloadData]);
  useEffect(() => {
    if (downloadingUpdate) {
      const tempArray = downloadData.map((obj) => {
        return { ...obj };
      });
      if (tempArray && tempArray?.length > 0) {
        tempArray?.splice(0, 1);
        dispatch(setDownloadData(tempArray));
      }
    }
  }, [downloadingUpdate]);
  return <React.Fragment />;
};

export default DownloadingComponent;
