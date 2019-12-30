
/**
吾嘗觀「「算經」」之書。方悟「冪」「平方根」之義。
 */

const 平方 = 甲 => 甲 * 甲;
const 平方根 = 甲 => Math.sqrt(甲);
const 冪 = 底 => 指數 => Math.pow(底, 指數);

const 半徑 = 1;

function 求小弦(裏觚之面) {
	return function (輪數) {
		if (輪數 <= 0) {
			return 裏觚之面;
		}

		const 半面 = 裏觚之面 / 2;

		const 股 = 平方根(平方(半徑) - 平方(半面));
		const 小句 = 半徑 - 股;
		const 小弦 = 平方根(平方(小句) + 平方(半面));

		return 求小弦(小弦)(輪數 - 1);
	};
};

//輪數始於一
function 劉徽割圓術(輪數) {
	輪數 = 輪數 - 1;
	const 觚數 = 冪(2)(輪數) * 6;
	const 小弦 = 求小弦(半徑)(輪數);
	const 弦周 = 小弦 * 觚數;
	const 圓冪 = (弦周 / 2) * 半徑;
	return 圓冪 / 平方(半徑);
}

console.log(劉徽割圓術(10));
