import * as utils from '../src/index'

describe('生成数字范围内的随机数', () => {
    it('randomNumber(1, 1) -> should return 1', () => {
        const rand = utils.randomNumber(1, 1)
        expect(rand).toBe(1)
    })
    it('randomNumber(1, 10) -> should return number', () => {
        const rand = utils.randomNumber(1, 10)
        expect(rand).toBeNaN
    })
})

describe('根据出生日期时间戳计算年龄', () => {
    it('getAgeByBirthday(696528000) -> should return 31', () => {
        const age = utils.getAgeByBirthday(696528000)
        expect(age).toBe(31)
    })
})