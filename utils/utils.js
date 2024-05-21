// 常见的 User-Agent 模板
const userAgentTemplates = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{chromeVersion} Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{chromeVersion} Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_{iosVersion} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Linux; Android {androidVersion}; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{chromeVersion} Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android {androidVersion}; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{chromeVersion} Mobile Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{chromeVersion} Safari/537.36 Edg/{edgeVersion}'
];

// 常见的 Chrome 版本
const chromeVersions = [
    '92.0.4515.107',
    '93.0.4577.82',
    '94.0.4606.61',
    '95.0.4638.54',
    '96.0.4664.45',
    '125.0.6422.60'
];

// 随机生成版本号
const getRandomVersion = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 生成随机 User-Agent 的方法
export const generateRandomUserAgent = () => {
    const template = userAgentTemplates[Math.floor(Math.random() * userAgentTemplates.length)];
    const chromeVersion = chromeVersions[Math.floor(Math.random() * chromeVersions.length)];
    const iosVersion = getRandomVersion(0, 5); // 假设iOS次版本在0到5之间
    const androidVersion = getRandomVersion(10, 13); // 假设Android版本在10到13之间
    const edgeVersion = `${getRandomVersion(80, 125)}.0.${getRandomVersion(1000, 5999)}.${getRandomVersion(0, 99)}`; // 更真实的Edge版本格式

    // 确保版本号没有多余的 ".0.0.0"
    return template
        .replace(/{chromeVersion}/g, chromeVersion)
        .replace(/{iosVersion}/g, iosVersion)
        .replace(/{androidVersion}/g, androidVersion)
        .replace(/{edgeVersion}/g, edgeVersion);
};