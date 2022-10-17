export const getLocationName = () => {
    const punycode = require("punycode");
    const url = new URL(window.location.href.replace("#", ""));
    let location = url.hostname;
    let siteName = punycode.toUnicode(location);
    return siteName;
}
