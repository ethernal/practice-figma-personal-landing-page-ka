import 'server-only';

import fs from 'fs/promises';
import path from 'path';

function readFile(localPath: string) {
	return fs.readFile(path.join(process.cwd(), localPath));
}

function readDirectory(localPath: string) {
	return fs.readdir(path.join(process.cwd(), localPath));
}
