export const repeatTextShadow = (scalarX, scalarY, getColor, amount) => {
	let ret = ''
	for (let i = 0; i < amount; i++) {
		ret += `${i * scalarX}px ${i * scalarY}px 0 ${getColor(i)}, `
	}
	return ret.substr(0, ret.length - 2);
}