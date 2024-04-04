import RNFetchBlob from "rn-fetch-blob";
import { isIOS, showToastMessage } from "../utils";
import { strings } from "../localization";
import { Alert, PermissionsAndroid } from "react-native";
import { FILE_PATH, REQUEST_METHODS } from "../helpers/constants";

const downloadFile = (
  FilePath: string,
  FileName: string,
  callback: any,
  progressCallBack: any
) => {
  const { fs } = RNFetchBlob;
  const PictureDir = fs.dirs.DownloadDir;
  const options = {
    fileCache: true,
    addAndroidDownloads: {
      // Related to the Android only
      useDownloadManager: true,
      notification: true,
      path: `${PictureDir}${FILE_PATH.FILE}${FileName}`,
      description: FILE_PATH.FILE_DESCRIPTION,
    },
  };
  RNFetchBlob.config(options)
    .fetch(REQUEST_METHODS.GET, FilePath)
    .progress((received, total) => {
      console.log('received', received);
      console.log('total', total);
      progressCallBack(received / total);
    })

    .then(() => {
      callback();
    }).catch((error)=>{
      console.error('error', error);
    });
};
 const downloadManager = (FilePath: string, FileName: string, callback: any, progressCallBack: any) => {
    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for runtime permission
    if (isIOS()) {
        downloadFile(
        FilePath,
        FileName,
        (res: any) => {
          console.log('res', res);
          callback(res);
        },
        (percent: number) => {
          progressCallBack(percent);
        },
      );
    } else {
      try {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            downloadFile(
              FilePath,
              FileName,
              (res: any) => {
                callback(res);
              },
              (percent: number) => {
                progressCallBack(percent);
              },
            );
          } else {
            // If permission denied then show alert 'Storage Permission
            Alert.alert('Error',strings.permissionDenied);
          }
        });
      } catch (err) {
        console.log('error', err);
      }
    }
  };
  export default downloadManager;