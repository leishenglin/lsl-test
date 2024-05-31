import http from 'http'
import proxyChain from 'proxy-chain'
import puppeteer from 'puppeteer-extra'
import proxy from 'puppeteer-extra-plugin-proxy'
import pluginSetalth from 'puppeteer-extra-plugin-stealth'
import socks from 'socks'
import sockpProxyAgent from 'socks-proxy-agent'
import ahooks from 'ahooks'
import antdImgCrop from 'antd-img-crop'
import autoprefixer from 'autoprefixer'
import axios from 'axios'
import postcss from 'postcss'
import qrcode from 'qrcode'
import smCrypto from 'sm-crypto'
import tailwindcss from 'tailwindcss'
import wangeditor from '@wangeditor/editor'
import antv from '@antv/g2plot'
import amap from '@amap/amap-jsapi-loader'
import { generateRandomUserAgent } from './utils/utils'

puppeteer.use(pluginSetalth())
console.log(http)
console.log(proxyChain)
console.log(proxy)
console.log(socks)
console.log(sockpProxyAgent)
console.log(url)
console.log(ahooks)
console.log(antdImgCrop)
console.log(autoprefixer)
console.log(axios)
console.log(postcss)
console.log(qrcode)
console.log(smCrypto)
console.log(tailwindcss)
console.log(wangeditor)
console.log(antv)
console.log(amap)

const b = puppeteer.launch();
console.log(b)
console.log(generateRandomUserAgent())
