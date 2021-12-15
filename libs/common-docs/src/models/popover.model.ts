export const PopoverStructure: PopoverStructureType = [
    {
        title: 'Startups',
        icon: '/assets/img/icons/startups.svg',
        activeIcon: '/assets/img/icons/startups_active.svg',
        description: 'Software development from scratch to market launch',
        route: 'clients/startups'
    },
    {
        title: 'Enterprises',
        icon: '/assets/img/icons/enterprises.svg',
        activeIcon: '/assets/img/icons/enterprises_active.svg',
        description: "Future-oriented solutions to solve today's problems and anticipate tomorrow’s needs",
    },
    {
        title: 'SMBs',
        icon: '/assets/img/icons/smbs.svg',
        activeIcon: '/assets/img/icons/smbs_active.svg',
        description: 'Budget-wise solutions for small to medium-sized businesses',
        route: 'clients/smbs'
    },
    {
        title: 'Non-profits',
        icon: '/assets/img/icons/non-profits.svg',
        activeIcon: '/assets/img/icons/non-profits_active.svg',
        description: "Technology solutions for non-governmental organizations"
    }
];

export type PopoverStructureType = {
    title: string,
    icon: string,
    description: string,
    activeIcon: string;
    route?: string
}[];


