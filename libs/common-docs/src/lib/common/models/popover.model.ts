export const PopoverStructure: PopoverStructureType = [
    {
        title: 'Startups',
        icon: '/assets/img/icons/startups.svg',
        description: 'Software development from <br>scratch to market launch',
        route: 'startups'
    },
    {
        title: 'Enterprises',
        icon: '/assets/img/icons/enterprises.svg',
        description: "Future-oriented solutions to solve today's problems and anticipate tomorrow’s needs",
        route: 'enterprises'
    },
    {
        title: 'SMBs',
        icon: '/assets/img/icons/smbs.svg',
        description: 'Budget-wise solutions for small to medium-sized businesses'
    },
    {
        title: 'Non-profits',
        icon: '/assets/img/icons/non-profits.svg',
        description: "Technology solutions for non-governmental organizations"
    }
]

export type PopoverStructureType = {
    title: string,
    icon: string,
    description: string,
    route?: string
}[];


