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
    description: 'Learn full stack development with Python – from basics to deployment.',
    tools: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Render / AWS'],
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
    tools: ['Manual Testing', 'SDLC', 'STLC', 'Test Cases & Reports', 'API Testing', 'Jira'],
  },
  {
    id: 'automation-testing',
    title: 'Automation Testing',
    category: 'Testing',
    icon: FaRobot,
    image: '/images/courses/automation-testing.jpg',
    description: 'Build real-world skills to create smarter, faster and more reliable software tests.',
    tools: ['Selenium', 'TestNG', 'Java', 'Cypress'],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    category: 'Data & Cloud',
    icon: FaChartBar,
    image: '/images/courses/data-analytics.jpg',
    description: 'Learn to analyse, visualise and turn data into decisions with real impact.',
    tools: ['Excel', 'SQL', 'Python', 'Power BI', 'Data Visualisation'],
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud',
    category: 'Data & Cloud',
    icon: FaCloud,
    image: '/images/courses/devops-cloud.jpg',
    description: 'Automate, deploy and scale with cloud technologies and modern DevOps practices.',
    tools: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Linux'],
  },
  {
    id: 'scrum-agile',
    title: 'Scrum Master & Agile',
    category: 'Agile',
    icon: FaUsers,
    image: '/images/courses/scrum-agile.jpg',
    description: 'Learn agile ways of working and how high-performing teams deliver.',
    tools: ['Scrum', 'Agile', 'Jira & Confluence', 'Kanban', 'Sprint Planning'],
  },
];
