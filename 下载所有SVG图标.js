
for (const item of data) {
	if(!item['svg']) {
		console.log('',item);
		continue;
	}
	const imageUrl = item["svg"];
	const fileName = `${item["二位代码"]}.svg`;
	console.log(imageUrl,fileName);
	
	try {
		// 下载图像
		const response = await fetch(imageUrl);
		if (!response.ok) throw new Error('Network response was not ok');
		const blob = await response.blob();
		
		// 创建下载链接
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = fileName;
		link.style.display = 'none';
		
		// 触发下载
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		
		console.log(`Downloaded: ${fileName}`);
	} catch (error) {
		console.error('Error downloading image:', error);
	}
}