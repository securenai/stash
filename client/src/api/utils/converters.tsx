export const RGBAToHexA = (r: number, g: number, b: number, a: number) => {
	let R = r.toString(16);
	let G = g.toString(16);
	let B = b.toString(16);
	let A = Math.round(a * 255).toString(16);

	if (R.length == 1) R = '0' + r;
	if (G.length == 1) G = '0' + g;
	if (B.length == 1) B = '0' + b;
	if (A.length == 1) A = '0' + a;

	return '#' + R + G + B + A;
};
