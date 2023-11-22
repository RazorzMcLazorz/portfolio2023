export type Project = {
  title: string
  description: string
  github?: string
  link?: string
  private?: boolean
}

export const ALLPROJECTS: Project[] = [
  {
    title: 'Allergen Buddy',
    description: 'A website that helps people with allergies plan events.',
    link: 'https://allergenbuddy.com',
    github: 'https://github.com/RazorzMcLazorz/allergen-buddy-web',
    private: true,
  },
  {
    title: 'Wild Haven / Wolf Haven',
    description:
      'This was a project i was asked to help convert from PHP to React.JS as the PHP stuff',
    link: 'https://wild-haven.app',
    private: true,
  },
  {
    title: "Wolf's Bane Cabinetry and Furniture",
    description:
      'I wanted to build a custom-built landing store page for one of my friends, so I showed him things and he picked out what he liked, essentially this website is cabinetry and furniture showing pure designs, I will note none of the pictures are real photos they were all free to use stock photos.',
    link: '',
    github: 'https://github.com/RazorzMcLazorz/WolfsBaneWebsite',
  },
  {
    title: 'v1.0 Portfolio',
    description:
      'This is the first version of my portfolio, it is built using React.js and Typescript.',
    link: '',
    github: 'https://github.com/RazorzMcLazorz/portfolio',
  },
  {
    title: 'Medicy',
    description:
      "I wanted to challenge myself on making an RTS-style game in the browser with a language that isn't meant to build games, For the new stack is Typescript React and CSS, I chose these languages because I want to improve my ability to work with the basics, I'm not using any library like Material-UI because that just hides stuff away from me, and instead I wanted this to be my creation if I can keep it that way. The game is meant to be a basic you maintain your kingdom and its wealth that way it can be prosperous and I plan to have events happen that can devastate your kingdom. So it is up to the player how they maintain their kingdom.",
    link: '',
    github: 'https://github.com/RazorzMcLazorz/medicy',
  },
  {
    title: 'WW1 Simulation Tracker',
    description:
      "My first Database Website, using Node.js and mysql hosted via ClearDB servers, The Game is for my highschool History Teacher, to help him with his WW1 game making it easier to keep track of everything while being completely online allowing use anywhere. It deals with player groups, choice decison's for the groups and resource managements per group while at the end sorting everyone into the specific ranking for the next round.",
    link: '',
    github: 'https://github.com/RazorzMcLazorz/WW1SimulationGame',
  },
  {
    title: 'Black Jack',
    description:
      'Complete working Black Jack Game online, it will soon be hosted as an app on google play store, after I add animations and sound to the game itself. this game is created in React.JS, it takes the complete knowledge of my coding with JavaScript and React.JS combines it into one to build this fun game.',
    link: '',
    github: 'https://github.com/RazorzMcLazorz/BlackJackWebsite',
  },
]
