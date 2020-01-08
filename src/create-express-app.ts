#!/usr/bin/env node
import program from 'commander'
import { version } from '../package.json'

program
  .name('create-express-app')
  .description('CLI for creating express app based on typescript.')
  .version(version, '-v, --version')
  .usage('[options] [out-dir]')
  .parse(process.argv)
