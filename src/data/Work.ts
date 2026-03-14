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
            "Collaborated with the professor to review syllabus and class understanding",
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
            "Intern at the ACM Club at SUNY Plattsburgh",
            "Assisted in organizing events and workshops for the club",
            "Helped with marketing and promotion of club activities"
        ],
        tags: ["Education", "Leadership", "Event Planning"],
        url: "https://campusgroups.plattsburgh.edu/acm/home/"
    }    
    ]
    
export const projects: workType[] = [
    {
        title: "ZeroCrumb",
        company: "Stony Brook University",
        date: "February 2026",
        description: ["1", "2", "3"],
        tags: ["ReactJS", "Supabase", "API"],
        url: "https://github.com/reysl-04/Hoppers2k26"
    }
]

