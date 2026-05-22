export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: 'levezza',
    title: 'Levezza Beauty',
    description: 'Plataforma premium de gestión y reserva de turnos para salones de belleza de alta gama. Cuenta con agendamiento de citas, perfiles de estilistas y panel administrativo de control.',
    image: '/projects/levezza.png',
    tags: ['Angular', 'TypeScript', 'Node.js', 'RxJS'],
    link: 'https://levezzabeauty.netlify.app',
    github: 'https://github.com/yery25/levezza'
  },
  {
    id: 'lunaia',
    title: 'Lunaia Beauty Studio',
    description: 'Sistema administrativo integrado para estudios de estética y cuidado personal. Ofrece agendamiento inteligente, perfiles de servicios, base de datos de clientes y seguridad avanzada.',
    image: '/projects/lunaia.png',
    tags: ['Angular', 'TypeScript', 'RxJS', 'CSS Modules'],
    link: 'https://dainty-sundae-ef2778.netlify.app',
    github: 'https://github.com/yery25/lunaia'
  },
  {
    id: 'promotor',
    title: 'Promotor App',
    description: 'Panel de control inteligente para la gestión de promotores de marca, seguimiento de campañas comerciales y métricas analíticas de rendimiento en tiempo real.',
    image: '/projects/promotor.png',
    tags: ['Angular', 'TypeScript', 'RxJS', 'TailwindCSS'],
    link: 'https://promotor.netlify.app',
    github: 'https://github.com/yery25/promotor'
  },
  {
    id: 'prodivisa',
    title: 'Pro Divisa (Inversiones Santos)',
    description: 'Plataforma financiera diseñada para la cotización y control de transacciones de divisas e inversiones para Inversiones Santos, con calculadora analítica en tiempo real.',
    image: '/projects/prodivisa.png',
    tags: ['Angular', 'TypeScript', 'RxJS', 'Chart.js'],
    link: 'https://prodivisa.netlify.app',
    github: 'https://github.com/yery25/prodivisa'
  },
  {
    id: 'agrofactura',
    title: 'Agro Factura (ProFactura.Agro)',
    description: 'Plataforma de facturación y administración digital diseñada para el sector agrícola y productores. Permite la emisión de facturas, control de clientes e inventario de cultivos.',
    image: '/projects/agrofactura.png',
    tags: ['Angular', 'TypeScript', 'RxJS', 'Node.js'],
    link: 'https://agrofactura.netlify.app',
    github: 'https://github.com/yery25/agrofactura'
  },
  {
    id: 'yerbia',
    title: 'Yerbia AI',
    description: 'Asistente técnico avanzado potenciado por inteligencia artificial local y de nube. Ofrece transcripción de voz inteligente y soporte interactivo para desarrolladores.',
    image: '/projects/yerbia.png',
    tags: ['Python', 'FastAPI', 'React', 'Ollama', 'Groq'],
    link: 'https://yerbia.netlify.app',
    github: 'https://github.com/yery25/yerbia-ai'
  }
];
