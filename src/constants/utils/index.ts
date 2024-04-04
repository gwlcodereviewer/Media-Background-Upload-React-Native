export const HEADER_TITLE_CENTER = "center";

export const ASYNC_CONST = {
  LoggedInUserInfo: "LoggedInUserInfo",
  LANGUAGE_KEY: "LANGUAGE_KEY",
  accessToken: "accessToken",
};

/**
 * align content
 */
export const ALIGNMENT = {
  left: "left",
  right: "right",
  center: "center",
};
/**
 * Name: SUPPORTED_ORIENTATIONS
 * Desc: Supported orientations
 */
export const SUPPORTED_ORIENTATIONS: (
  | 'portrait'
  | 'landscape'
  | 'landscape-left'
  | 'landscape-right'
)[] = ['portrait', 'landscape', 'landscape-left', 'landscape-right'];
/**
 * Name: DATE_FORMAT
 * Desc: The different date formats.
 */
export const DATE_FORMAT = {
  YYYY_MM_DD: 'YYYY-MM-DD',
  MM_DD_YYYY: 'MM-DD-YYYY',
  MM: 'MM',
  DD: 'DD',
  YYYY: 'YYYY',
};
/**
 * Name: FOLDER_NAMES
 * Desc: Folder names for signed url api request
 */
export const FOLDER_NAMES = {
  saveChaptersQuestions: 'attachments/user_id',
  addNewMedia: 'attachments/user_id',
  saveFeaturedImage: 'chapter_title_chapter_id/images/',
  addStoryAttachment: 'attachments/user_id',
  changeCover: 'user-banners',
  changeProfilePic: 'users',
};
/**
 * Name: MEDIA_FILE_TYPE
 * Desc: The media file type
 */
export const MEDIA_FILE_TYPE = {
  image: 'image',
  video: 'video',
};