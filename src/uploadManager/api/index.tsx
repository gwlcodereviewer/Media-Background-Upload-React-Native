import { REQUEST_METHODS } from "../../helpers/constants";
import {decode} from 'base64-arraybuffer';
import { IUploadDetail } from "../../redux/api/uploadState";

/**
 * Name: uploadToS3
 * Desc: Function to upload image/document to aws s3
 * @param {string} uploadUrl - aws presigned url
 * @param {any} fileData - file data
 * @returns response status
 */
export const uploadToS3 = async (uploadUrl: string | URL | Request, fileData: IUploadDetail) => {
    try {
      const arrayBuffer = decode(fileData.fileBase64Path);
      const response = await fetch(uploadUrl, {
        method: REQUEST_METHODS.PUT,
        body: arrayBuffer,
      });
      return response.status;
    } catch (error) {
      return false;
    }
  };