'use strict';

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
	{name: 'target', alias: 't', type: String },
	{name: 'memos', alias: 'm', type: String, defaultValue: 'D12345678901234'  },
	{name: 'verbose', alias: 'v', type: Boolean}
]

const options = commandLineArgs(optionDefinitions)


if (options.target === undefined) {
	console.error("必须提供转帐去的钱包");
	process.exit()
}

console.log(options)
