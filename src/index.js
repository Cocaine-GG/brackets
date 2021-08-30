module.exports = function check(str, bracketsConfig) {
	let conf = bracketsConfig.map(el => el.join(''))
	for (let i = 0; i < conf.length; i++) {
		if (str.includes(conf[i])) {
			str = str.replace(conf[i], '')
			i = -1
		}
	}
	return str.length === 0
}
