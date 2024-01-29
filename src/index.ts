/**
 * 生成数字范围内的随机数
 * @param min 最小数字
 * @param max 最大数字
 * @returns 数字
 */
export function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
/**
 * 根据生日计算年龄
 * @param birthdayTS 出生日期时间戳（秒）
 * @returns 年龄
 */
export function getAgeByBirthday(birthdayTS: number): number {
    // 获取当前日期
    let currentDate = new Date()
    // 将传入的时间戳转换为日期格式
    let birthday = new Date(birthdayTS * 1000)
    // 计算年份差值
    let age = currentDate.getFullYear() - birthday.getFullYear()

    if (currentDate < birthday || currentDate.getMonth() < birthday.getMonth()) {
        age-- // 如果还未过生日或者已经过了生日月份，则需要减去1岁
    } else if (currentDate.getMonth() === birthday.getMonth() && currentDate.getDay() < birthday.getDay()) {
        age-- // 如果同样在同一个月内，但是今天还没有过生日，也需要减去1岁
    }

    return age
}