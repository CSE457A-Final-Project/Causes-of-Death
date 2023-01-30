export default function getOS () {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("win") != -1) 
      return 'Win';
    if (ua.indexOf("mac") != -1)
        return "MacOS";
    if (ua.indexOf("x11") != -1)
        return "Unix";
    if (ua.indexOf("linux") != -1)
        return "Linux";
}