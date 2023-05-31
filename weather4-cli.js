#!/usr/bin/env node
const getWeather = require('weather4')

if (process.argv[2] === '--help') {
  console.log(`
    Usage:
      getWeather <cityname>
    Example:
      getWeather 北京
    `)
} else {
  let city = process.argv[2]

  getWeather(city).then(data => {
    console.log(`更新时间：` + data.update_time)
    console.log(`日期：` + data.date)
    console.log(`当前城市：` + data.city)
    console.log(`空气质量：` + data.air_level)
    console.log(`天气概况：`)
    console.log(` 天气：` + data.wea)
    console.log(` 当前温度：` + data.tem + `°`)
    console.log(` 最高温度：` + data.tem1 + `°`)
    console.log(` 最低温度：` + data.tem2 + `°`)
    console.log(` 风向：` + data.win)
  }).catch(e => {
    console.log(e)
  })
}




