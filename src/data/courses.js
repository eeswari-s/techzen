import {
  FaJava,
  FaPython,
  FaCode,
  FaBug,
  FaRobot,
  FaChartBar,
  FaCloud,
  FaUsers,
} from 'react-icons/fa';

/**
 * Edit courses here. Each course needs:
 * id, title, category (one of COURSE_CATEGORIES), icon, image, description, tools[]
 */
export const COURSE_CATEGORIES = ['All', 'Development', 'Testing', 'Data & Cloud', 'Agile'];

export const COURSES = [
  {
    id: 'java-full-stack',
    title: 'Java Full Stack Development',
    category: 'Development',
    icon: FaJava,
    image: '/images/courses/java-full-stack.jpg',
    description: 'Explore front-end and back-end development and build complete web applications.',
    tools: ['Java', 'Spring Boot', 'React', 'SQL'],
  },
  {
    id: 'python-full-stack',
    title: 'Python Full Stack Development',
    category: 'Development',
    icon: FaPython,
    image: '/images/courses/python-full-stack.jpg',
    description: 'Learn Python programming and build full-stack applications with modern frameworks.',
    tools: ['Python', 'Django', 'React', 'SQL'],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Development',
    icon: FaCode,
    image: '/images/courses/web-development.jpg',
    description: 'Learn the fundamentals of building modern, responsive websites.',
    tools: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    id: 'software-testing',
    title: 'Software Testing',
    category: 'Testing',
    icon: FaBug,
    image: '/images/courses/software-testing.jpg',
    description: 'Understand software quality and testing fundamentals.',
    tools: ['Manual Testing', 'SDLC', 'STLC', 'Jira', 'API Testing', 'Postman'],
  },
  {
    id: 'automation-testing',
    title: 'Automation Testing',
    category: 'Testing',
    icon: FaRobot,
    image: '/images/courses/automation-testing.jpg',
    description: 'Learn how automation supports efficient software testing.',
    tools: ['Java', 'Selenium', 'TypeScript', 'Playwright'],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    category: 'Data & Cloud',
    icon: FaChartBar,
    image: '/images/courses/data-analytics.jpg',
    description: 'Discover data analysis, visualisation and data-driven thinking.',
    tools: ['Excel', 'SQL', 'Python', 'Power BI', 'Pandas'],
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud',
    category: 'Data & Cloud',
    icon: FaCloud,
    image: '/images/courses/devops-cloud.jpg',
    description: 'Explore cloud technologies and modern development practices.',
    tools: ['AWS', 'Linux', 'Git', 'Docker', 'CI/CD'],
  },
  {
    id: 'scrum-agile',
    title: 'Scrum Master & Agile',
    category: 'Agile',
    icon: FaUsers,
    image: '/images/courses/scrum-agile.jpg',
    description: 'Learn agile ways of working and how high-performing teams deliver.',
    tools: ['Agile', 'Scrum', 'Jira', 'Sprint Planning'],
  },
];
