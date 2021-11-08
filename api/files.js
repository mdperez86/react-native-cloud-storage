import {COLORS, ICONS} from '../constants';

const CATEGORIES = [
  {
    id: 0,
    name: 'Archives',
    icon: ICONS.document,
    colors: {
      primary: COLORS.violet,
      secondary: COLORS.violetTint,
    },
    types: ['*'],
  },
  {
    id: 1,
    name: 'Videos',
    icon: ICONS.video,
    colors: {
      primary: COLORS.teal,
      secondary: COLORS.tealTint,
    },
    types: ['webp', 'mp4', 'avi', 'application/vnd.google-apps.video'],
  },
  {
    id: 2,
    name: 'Images',
    icon: ICONS.image,
    colors: {
      primary: COLORS.yellow,
      secondary: COLORS.yellowTint,
    },
    types: [
      'jpg',
      'jpeg',
      'png',
      'gif',
      'bmp',
      'application/vnd.google-apps.photo',
    ],
  },
  {
    id: 3,
    name: 'Musics',
    icon: ICONS.music,
    colors: {
      primary: COLORS.blue,
      secondary: COLORS.blueTint,
    },
    types: ['mp3', 'application/vnd.google-apps.audio'],
  },
  {
    id: 4,
    name: 'Docs',
    icon: ICONS.document,
    colors: {
      primary: COLORS.green,
      secondary: COLORS.greenTint,
    },
    types: [
      'doc',
      'docx',
      'pdf',
      'xls',
      'xlsx',
      'application/vnd.google-apps.document',
      'application/vnd.google-apps.presentation',
      'application/vnd.google-apps.spreadsheet',
    ],
  },
];

const FILES = [
  {
    id: 1,
    name: 'Music 1',
    size: 9.2 * 1024 * 8,
    fileExtension: 'mp3',
  },
  {
    id: 2,
    name: 'Image 1',
    size: 4.8 * 1024 * 8,
    fileExtension: 'jpg',
  },
  {
    id: 3,
    name: 'Zip 1',
    size: 3.7 * 1024 * 1024 * 8,
    fileExtension: 'zip',
  },
  {
    id: 4,
    name: 'Doc 1',
    size: 2.3 * 1024 * 8,
    fileExtension: 'doc',
  },
  {
    id: 5,
    name: 'Video 1',
    size: 1.8 * 1024 * 1024 * 8,
    fileExtension: 'webp',
  },
];

const FOLDERS = [
  {
    id: 1,
    name: 'The next big thing',
    files: 12,
    size: 2.1 * 1024 * 1024 * 8,
    shares: [
      'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1468379158995-7d99a9586d7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80',
    ],
  },
  {
    id: 2,
    name: 'Top secret',
    files: 7,
    size: 500 * 1024 * 8,
    shares: [
      'https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80',
    ],
  },
  {
    id: 3,
    name: 'Freebie project',
    files: 3,
    size: 192 * 1024 * 8,
    shares: [
      'https://images.unsplash.com/photo-1468379158995-7d99a9586d7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1449322593469-9e30eb4f1a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80',
    ],
  },
  {
    id: 4,
    name: 'London Meetup',
    files: 253,
    size: 1.7 * 1024 * 1024 * 8,
    shares: [
      'https://images.unsplash.com/photo-1449322593469-9e30eb4f1a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1468379158995-7d99a9586d7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80',
    ],
  },
];

export function getCategories() {
  return Promise.resolve(CATEGORIES);
}

function findCategory(id) {
  return CATEGORIES.find(idMatcher);

  function idMatcher(category) {
    return category.id === id;
  }
}

export function getFiles({categoryId, search} = {}) {
  let files = FILES;
  if (categoryId) {
    const category = findCategory(categoryId);
    files = files.filter(categoryMatcher(category));
  }
  if (search) {
    files = files.filter(nameMatcher(search));
  }
  const categorizeFiles = getCategorizeFiles(files);
  return Promise.resolve(categorizeFiles);
}

function getCategorizeFiles(files) {
  return files.map(categorize);
}

export function categorize(file) {
  const category = CATEGORIES.find(fileMatcher(file)) ?? CATEGORIES[0];

  return {
    ...file,
    category,
  };
}

function categoryMatcher({types}) {
  return function byFile(file) {
    return types.includes('*') || types.includes(file.fileExtension);
  };
}

function nameMatcher(search) {
  return function byFile(file) {
    return new RegExp(search, 'gi').test(file.name);
  };
}

function fileMatcher(file) {
  return function byCategory({types}) {
    return types.includes(file.fileExtension) || types.includes(file.mimeType);
  };
}

export function getFolders() {
  return Promise.resolve(FOLDERS);
}
