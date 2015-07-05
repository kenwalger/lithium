local lithium = {}
local io = require('io')
local json = require('some-json-lib')

lithium.compile = require('compile')

function lithium.options()
	io.open("/opt/lithium/options.json")
	local opts = json.decode(io.read("*all"))
	return opts
end

return lithium