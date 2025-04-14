import reactMealsImg from '../assets/projects/reactmeals.png';
import todoListImg from '../assets/projects/todolist-react-asylbek.png';

export const projects = [
    {
      title: 'Math ORT App',
      description: 'A full-stack educational quiz app with email auth, real environments & GitLab CI/CD.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'SendGrid'],
      live: 'https://math-ort.netlify.app/',
      gitlab: 'https://gitlab.com/math-ort/ort',
      image: '/images/math-ort-preview.png',
    },
    {
        title: 'ReactMeals – Food Ordering App',
        description:
          'A responsive food ordering app built with React. Users can add meals to cart and place orders.',
        tech: ['React', 'Context API', 'CSS Modules'],
        live: 'https://food-order-asylbek.netlify.app/',
        github: 'https://github.com/asyke/food-app-redo',
        image: reactMealsImg,
      },
      {
        title: 'Todolist React App',
        description: 'A task management UI with team member avatars and real-time task list updates built using React.',
        tech: ['React', 'CSS Modules'],
        live: 'https://todolist-react-asylbek.netlify.app/',
        github: 'https://github.com/asyke/react-task-app', // 🔁 update if actual link differs
        image: todoListImg,
      }
  ]
  