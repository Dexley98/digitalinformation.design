export function getTrackName(slug){
    switch(slug){
        case '/interactivemedia':
            return "INTERACTIVE MEDIA"
        case '/webapps':
            return "WEB APPLICATIONS"
        case '/commerce':
            return "DIGITAL COMMERCE"
        case '/massmedia':
            return "DIGITAL MASS MEDIA"
        default:
            return "Not a track!"
    }
}
