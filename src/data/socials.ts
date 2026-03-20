// Import images from assets folder in one statement
const svgs = import.meta.glob('../assets/*.svg', {
    eager: true,
    import: 'default',
}) as Record<string, string>

// Interface for social media links object
interface socialLink {
    name: string
    link: string
    linkHover: string
    url: string
}

// Lists of social media platforms and their corresponding URLs
const socialList: string[] = ['github', 'gmail', 'instagram', 'linkedin']
const socialUrls: Record<string, string> = {
    github: 'https://github.com/reysl-04',
    gmail: 'mailto:alexreyesl0410@gmail.com',
    instagram: 'https://www.instagram.com/alex.reysl04/',
    linkedin: 'https://www.linkedin.com/in/alex-reyes04/'
}

// Function to create a social media link object from a platform name.
const addSocial = function(name: string) {
    return {
        name: name,
        link: svgs[`../assets/${name.toLowerCase()}.svg`],
        linkHover: svgs[`../assets/${name.toLowerCase()}-hover.svg`],
        url: socialUrls[name.toLowerCase()] // Get URL from socialURLs object based on the name
    }
}

// Creates an array of social media link objects.
export const socials: socialLink[] = socialList.map(addSocial);
