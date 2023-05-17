/* eslint-disable no-console */
'use strict';

import { createServer } from './createServer';

const PORT = process.env.PORT || 5000;

createServer().listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
