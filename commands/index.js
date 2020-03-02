#!/usr/bin/env node

switch (process.argv[2]) {
    case 'init': require('../commands/init/index')(process.argv[3]);
}
