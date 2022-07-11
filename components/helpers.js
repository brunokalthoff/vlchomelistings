export const makeSlug = string => {
    const lowerCase = string.toLowerCase();
    const arr = lowerCase.split(" ");
    return arr.join("-");
}