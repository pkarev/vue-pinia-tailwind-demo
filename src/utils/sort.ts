export const sortStringsAlphabetically = (current: string, next: string) => {
    if (current.toLowerCase() < next.toLowerCase()) {
        return -1;
    }

    if (current.toLowerCase() > next.toLowerCase()) {
        return 1;
    }

    return 0;
}

export const sortDatesChronologically = (current: Date, next: Date) => {
    return current.getMilliseconds() - next.getMilliseconds();
}