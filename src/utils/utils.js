export function isType(value) {
	return ['default', 'success', 'warning', 'error'].indexOf(value) !== -1
}

export function isSize(value) {
	return ['large', 'medium', 'small'].indexOf(value) !== -1
}

export function isIcon(value) {
	return ['', 'search', 'undo', 'tags', 'stop'].indexOf(value) !== -1
}