declare namespace frontEndUtils {
    export function randomNumber(min: number, max: number): number

    export function getAgeByBirthday(birthdayTS: number): number
}

declare module 'front-end-utils' {
    export = frontEndUtils
}