const fs = require("node:fs")

function part1(arr1, arr2) {
	// assumes arr1 and arr2 are same length
	let distance = 0;
	let new_arr1 = arr1.sort();
	let new_arr2 = arr2.sort();
	for(let i in arr1) {
		distance += Math.abs(new_arr1[i]-new_arr2[i]);
	}
	return distance

}
function part2() {
	let arr1 = [];
	let arr2 = [];
	let data = String(fs.readFileSync('./data.txt','utf-8'));
	data = data.split("\n");
	data.pop()
	for(let item of data) {
		row = item.split("   ");
		console.log(Number(row[1]))
		arr1.push(Number(row[0]));
		arr2.push(Number(row[1]));
		
	}
	return [arr1, arr2]


}

console.log(part1(...part2()));


