#!/usr/bin/env node
import program from 'commander'
import { version } from '../package.json'

program
  .name('create-express-app')
  .description('Create express application through simple CLI')
  .version(version, '-v, --version')
  .usage('[options] [out-dir]')
  .parse(process.argv)
