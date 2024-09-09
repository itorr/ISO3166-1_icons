const table = document.querySelector('.wikitable');

// 获取表头（标题）
const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());

// 提取每一行的数据
const rows = Array.from(table.querySelectorAll('tbody tr')).map(row => {
	const cells = Array.from(row.querySelectorAll('td'));
	return {
		[headers[0]]: cells[0].textContent.trim(),
		[headers[1]]: cells[1].textContent.trim(),
		[headers[2]]: cells[2].textContent.trim(),
		[headers[3]]: cells[3].textContent.trim(),
		[headers[4]]: cells[4].querySelector('a') ? cells[4].querySelector('a').textContent.trim() : cells[4].textContent.trim(),
		[headers[5]]: cells[5].querySelector('a') ? cells[5].querySelector('a').textContent.trim() : cells[5].textContent.trim(),
		[headers[6]]: cells[6].textContent.trim(),
		"图片地址": cells[5].querySelector('img') ? cells[5].querySelector('img').src.replace(/(\d+x)/, '44px') : null
	};
});

copy(JSON.stringify(rows, null, '\t'));
