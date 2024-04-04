# redux  
Guide to implement AWS and background upload in the React native project, 

## Note about this component
It is help to implement media and file to amazon s3 direct, and uploading in background also , it will not stuck user to single screen.
We can add multiple uploads in queue and upload will not be stop if go one screen to another.
Also having a feature to see uploading process and number of items in queue.

## Usage
copy uploadManager Folder to project and update according to requirement.
Here is sample code where we are uploading media to amazon s3 with background upload so if any changes required please update accordingly.
Please import UploadComponent in Root class. 

```       <GestureHandlerRootView style={styles.gestureView}>
            <MainStackNavigator />
            <Toast />
            <UploadComponent />
          </GestureHandlerRootView>

```
We are using the Redux Toolkit for callbacks.
For getting upload state and data use, We have created a state slice in the redux folder named uploadState.
There are four states in uploadState;
uploadData: IUploadDetail[];
uploadingComplete: boolean;
uploadingStart: boolean;
uploadingProgress: number;
uploadData having data for file upload;
uploadingComplete is complete upload;
uploadingStart is for start uploading;
and uploadingProgress is for getting upload progress.

>how to use states in UI component 
const uploadingProgress = useSelector(
    (state: RootState) => state.upload.uploadingProgress,
  ); 
 /**
   * Name: useEffect
   * Desc: useEffect to handle uploading start and complete
   */
  useEffect(() => {
    setUploadingStateProgress(uploadingProgress);
  }, [uploadingProgress]);

> UploadingStatusModal can be use to monitor uploading progress and listing queue of upcoming upload items
    <UploadingStatusModal
        visible={uploadingVisibleStatus}
        onClose={() => setShowUploadModal(false)}
      />




