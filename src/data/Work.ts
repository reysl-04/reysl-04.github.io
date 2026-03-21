interface workType {
    title: string;
    company: string;
    date: string;
    description: string[];
    tags: string[];
    url: string;
}

export const experiences: workType[] = [
    {
        title: "Teaching Assistant",
        company: "SUNY Plattsburgh",
        date: "Jan 2026 - Present",
        description: [
            "Teaching assistant at the computer science department at SUNY Plattsburgh",
            "Aided +20 students in their understanding of core programming concepts and projects using Python",
            "Held office hours at the Learning Center three times a week and provided one-on-one support to Computer Science students for CSC221 (Intro to programming)",
            "Provided extra resources to students to improve and review class material"
        ],
        tags: ["Education", "Teaching", "Support"],
        url: "https://www.plattsburgh.edu/"
    },
    {
        title: "ACM Club Member & Intern",
        company: "SUNY Plattsburgh",
        date: "August 2025 - Present",
        description: [
            "Active participation as a member, developing small CRUD applications and building prototypes for future club projectsusing reactJS and React Native",
            "Active  participation  as  an  intern,  assisting  with 1-hour weekly meetings and hosting events related to software and web development.", 
            "Supported over 5 members with their fundamental programming understanding and problems related to their projects and assignments during and outside club meeting hours"
        ],
        tags: ["Education", "Leadership", "Event Planning", "Communication", "Teamwork"],
        url: "https://campusgroups.plattsburgh.edu/acm/home/"
    }    
    ]
    
export const projects: workType[] = [
    {
        title: "ZeroCrumb",
        company: "SUNY Stony Brook",
        date: "February 2026",
        description: [
            "Web app focused on tracking user’s daily intake calories based on photos taken from the user. Instagram-like interface to share progress with people within the user's area.",
            "Developed Front-end with Code Claude AI Assistance, as well as a solid foundation on React and Tailwind",
            "Assisted with development of back-end n using PLpgSQL and Supabase, as well as connecting the web app with the LogMeal AI API."
        ],
        tags: ["ReactJS", "Supabase", "API", "PLpgSQL", "Tailwind", "Glaude Code", "Render", "Typecript"],
        url: "https://github.com/reysl-04/Hoppers2k26"
    }
]

