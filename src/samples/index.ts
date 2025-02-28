
import fs from 'vite-plugin-fs/browser';

// get current dir relative to root
const currentDir = import.meta.url.split('/').slice(3, -1).join('/');
const filesInfo = import.meta.glob('./*.cql');

const filesPath: string[] = [];

for (const path in filesInfo) {
  filesPath.push(path);
}

export const getFileContentByPath = async (path: string) => {
  return await fs.readFile(`${currentDir}/${path}`);
}

export const getFileNameFromPath = (path: string) => {
  const parts = path.split("/");
  return parts[parts.length - 1];
}

export const samples = {
  filesPath
} as const;
