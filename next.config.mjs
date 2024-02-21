/** @type {import('next').NextConfig} */

import path from 'path';

const nextConfig = {
  
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, './src/app/ui.global.scss')],
    prependData: `@import "global.scss";`
  }
  
};

export default nextConfig;
