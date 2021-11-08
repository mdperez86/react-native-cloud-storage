import {
  GDrive,
  ListQueryBuilder,
  MimeTypes,
} from '@robinbobin/react-native-google-drive-api-wrapper';
import {useCallback, useEffect, useState} from 'react';
import {useAuthContext} from '../contexts';

export function useGoogleDrive() {
  const {accessToken} = useAuthContext();
  const [drive, setDrive] = useState(new GDrive());

  useEffect(handleTokenChange, [accessToken]);

  return drive;

  function handleTokenChange() {
    const gdrive = new GDrive();
    gdrive.accessToken = accessToken;
    setDrive(gdrive);
  }
}

export function useTotalFilesByQuery(q) {
  const drive = useGoogleDrive();
  const [total, setTotal] = useState(0);

  useEffect(getTotalFiles, [drive, q]);

  function getTotalFiles() {
    drive.files
      .list({
        q,
        fields: 'files(id)',
      })
      .then(handleFilesResponse)
      .catch(handleFilesError);
  }

  function handleFilesResponse({files}) {
    setTotal(files.length);
  }

  function handleFilesError(error) {
    console.error(error);
  }

  return total;
}

export function useTotalFiles() {
  const query = new ListQueryBuilder().operator(
    'mimeType',
    '!=',
    MimeTypes.FOLDER,
    false,
    true,
  );

  return useTotalFilesByQuery(query);
}

export function useTotalFolders() {
  const query = new ListQueryBuilder().operator(
    'mimeType',
    '=',
    MimeTypes.FOLDER,
    false,
    true,
  );

  return useTotalFilesByQuery(query);
}

export function useFileSearch() {
  const drive = useGoogleDrive();
  const [nextPageToken, setNextPageToken] = useState(null);

  function load({q, fields, pageSize}) {
    const params = {
      q,
      fields: `nextPageToken,${fields}`,
      pageSize: pageSize ?? 16,
    };

    return drive.files
      .list(params)
      .then(handleFilesResponse)
      .catch(handleFilesError);
  }

  function next({q, fields, pageSize}) {
    let params = {
      q,
      fields: `nextPageToken,${fields}`,
      pageSize: pageSize ?? 16,
    };

    if (nextPageToken) {
      params = {
        ...params,
        pageToken: nextPageToken,
      };
    }

    return drive.files
      .list(params)
      .then(handleFilesResponse)
      .catch(handleFilesError);
  }

  function handleFilesResponse(response) {
    setNextPageToken(response.nextPageToken);
    return Promise.resolve(response.files);
  }

  function handleFilesError(error) {
    console.error('handleFilesError', error);
    return Promise.resolve([]);
  }

  return {
    load: useCallback(load, [drive]),
    next: useCallback(next, [drive, nextPageToken]),
  };
}
