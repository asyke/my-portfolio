import reactMealsImg from '../assets/projects/reactmeals.png';
import todoListImg from '../assets/projects/todolist-react-asylbek.png';
import math_ort from '../assets/projects/math-ort-preview.png'
import comfortStoreImg from '../assets/projects/comfort-store-demo.png'

export const projects = [
    {
      title: 'Math ORT App',
      description: 'A full-stack educational quiz app with email auth, real environments & GitLab CI/CD.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'SendGrid'],
      live: 'https://math-ort.netlify.app/',
      repo: 'https://gitlab.com/math-ort/ort',
      repoType: 'gitlab',
      image: math_ort,
    },
    {
      title: 'ReactMeals – Food Ordering App',
      description: 'A responsive food ordering app built with React. Users can add meals to cart and place orders.',
      tech: ['React', 'Context API', 'CSS Modules'],
      live: 'https://food-order-asylbek.netlify.app/',
      repo: 'https://github.com/asyke/food-app-redo',
      repoType: 'github',
      image: reactMealsImg,
    },
    {
      title: 'Todolist React App',
      description: 'A task management UI with team member avatars and real-time task list updates built using React.',
      tech: ['React', 'CSS Modules'],
      live: 'https://todolist-react-asylbek.netlify.app/',
      repo: 'https://github.com/asyke/react-task-app',
      repoType: 'github',
      image: todoListImg,
    },
    {
      title: 'Comfort Store – E-commerce App',
      description: 'An e-commerce demo built with React and Context API for shopping cart, routing, and protected checkout.',
      tech: ['React', 'Context API', 'Auth', 'CSS'],
      live: 'https://comfort-store-demo.netlify.app/',
      repo: 'https://github.com/asyke/store-comfort.git',
      repoType: 'github',
      image: comfortStoreImg,
    }
  ]
  
  