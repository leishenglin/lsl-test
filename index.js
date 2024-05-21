import http from 'http'
import proxyChain from 'proxy-chain'
import puppeteer from 'puppeteer-extra'
import proxy from 'puppeteer-extra-plugin-proxy'
import pluginSetalth from 'puppeteer-extra-plugin-stealth'
import socks from 'socks'
import sockpProxyAgent from 'socks-proxy-agent'
import url from 'url'
import { generateRandomUserAgent } from './utils/utils'

puppeteer.use(pluginSetalth())
console.log(http)
console.log(proxyChain)
console.log(proxy)
console.log(socks)
console.log(sockpProxyAgent)
console.log(url)

const b = puppeteer.launch();
console.log(b)
console.log(generateRandomUserAgent())
