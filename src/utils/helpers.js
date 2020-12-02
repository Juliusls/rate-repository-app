export const toThousands = (value) => {
    return value >= 1000 
        ? `${Math.round(value/100)/10}k`
        : value;
};

export const formatDate = (dateToFormat) => {
    const date = new Date(dateToFormat);
    return [date.getUTCDate(), date.getUTCMonth(), date.getUTCFullYear()].join('.');
};