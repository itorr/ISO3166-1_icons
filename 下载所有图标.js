(async function() {
    // JSON 数据
    const data = [
        {
            "英文短名称": "Afghanistan",
            "二位代码": "AF",
            "三位代码": "AFG",
            "数字代码": "004",
            "ISO 3166-2": "ISO 3166-2:AF",
            "中文名称": "阿富汗",
            "独立主权": "是",
            "图片地址": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/22px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png",
            "大图": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/640px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png"
        }
    ];

    for (const item of data) {
        const imageUrl = item["大图"];
        const fileName = `${item["二位代码"]}.png`;

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
})();
