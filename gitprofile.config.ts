// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'JIBGuzman',
  },

  base: '/',

  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },

    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Automated Pill Dispenser',
          description:
            'Automated medication management system using NUCLEO-F767ZI and Raspberry Pi 5 with biometric security, dispensing modes, object recognition, 7" touchscreen, MySQL database logging, and modular storage for 16+ medications.',
          imageUrl: 'https://raw.githubusercontent.com/JonTeaCz/CECS490-DR.PILL/main/assets/dispenser.jpg',
          link: 'https://github.com/JonTeaCz/CECS490-DR.PILL',
        },
        {
          title: 'Bluetooth Car',
          description:
            'Dual-mode robotic system using TM4C123 and HC-05 Bluetooth for wireless manual and autonomous navigation, PWM motor drivers, Hall-effect sensor feedback, and LED status indicators.',
          imageUrl: 'https://via.placeholder.com/400x250?text=Bluetooth+Car',
          link: 'https://github.com/JIBGuzman/Project3_447',
        },
        {
          title: 'Piano Project',
          description:
            'Microcontroller-based instrument with touch keypad input and R/2R ladder DAC audio output, supporting live performance (3-octave range) and automated music box playback of MIDI sequences.',
          imageUrl: 'https://via.placeholder.com/400x250?text=Piano+Project',
          link: 'https://github.com/JIBGuzman/Piano-Project',
        },
        {
          title: 'I2C Network Communication',
          description:
            'Multi-device I2C network with TM4C123 master, TCS34725 color sensor, MPU6050 gyro, 16x2 LCD, PWM servo control, and dual 4.7kΩ pull-up resistors for stable communication.',
          imageUrl: 'https://via.placeholder.com/400x250?text=I2C+Network',
          link: 'https://github.com/JIBGuzman/Project5_447',
        },
        {
          title: 'Weather Quest',
          description:
            'IoT weather station with WiFi API integration (OpenWeatherMap), ST7735 display, animated icons, multi-location query via UART, and real-time temperature/humidity updates.',
          imageUrl: 'https://via.placeholder.com/400x250?text=Weather+Station',
          link: 'https://github.com/JIBGuzman/Project4_447',
        },
        {
          title: 'UART Communication System',
          description:
            'Cross-device protocol enabling PC-to-microcontroller chat relay, synchronized RGB LED color cycling, and DMA-optimized brightness control with configurable baud rates.',
          imageUrl: 'https://via.placeholder.com/400x250?text=UART+System',
          link: 'https://github.com/JIBGuzman/Project2_447',
        },
        {
          title: 'Receipt Generator',
          description:
            'Console-based point-of-sale system with SKU inventory, real-time cart updates, dual payment processing, dynamic tax calculation, and automated receipt generation.',
          imageUrl: 'https://via.placeholder.com/400x250?text=Receipt+Generator',
          link: 'https://github.com/JIBGuzman/Market',
        },
        {
          title: 'FSM Traffic Light System',
          description:
            'Advanced traffic light controller for two-street intersection using TM4C123, real-time sensor input, Moore FSM, SysTick-based delays, hardware debouncing, and logic analyzer validation.',
          imageUrl: 'https://via.placeholder.com/400x250?text=Traffic+Light+System',
          link: 'https://github.com/JIBGuzman/Embedded_Systems/tree/main/CECS_346_Project_1',
        },
      ],
    },
  },

  seo: {
    title: 'Portfolio of Joseph Guzman',
    description: 'Computer Engineering graduate with embedded systems, software, and hardware experience.',
    imageURL: 'https://avatars.githubusercontent.com/u/0000000?v=4', // Replace with your actual GitHub profile image or hosted headshot
  },

  social: {
    linkedin: 'josephguzmani',
    x: '',
    website: '',
    phone: '', // Hidden for privacy in public portfolio
    email: 'JosephGuzman1019@gmail.com',
  },

  resume: {
    // Updated with your new public resume link if you decide to upload it publicly; placeholder here
    fileUrl: 'https://github.com/JIBGuzman/joseph-guzman-resume/raw/main/Joseph_Guzman_Resume_2025.pdf',
  },

  skills: [
    // Updated technical and soft skills from your resume grouped for readability
    // Programming Languages
    'C',
    'C++',
    'Python',
    'MATLAB',
    'Verilog',
    'Java',
    'JavaScript',
    'SQL',
    'HTML',
    'Assembly',

    // Tools & IDEs
    'STM32CubeIDE',
    'Vivado',
    'Keil uVision',
    'SolidWorks',
    'Shapr3D',
    'Git',
    'GitHub',
    'MySQL',
    'Linux',
    'VirtualBox',
    'Jupyter Notebook',
    'LTspice',

    // Hardware & Protocols
    'I2C',
    'UART',
    'SPI',
    'PWM',
    'Circuit Design',
    'Testing',
    'Calibration',
    'Troubleshooting',
    'Hardware Assembly',

    // Soft Skills
    'Leadership',
    'Team Collaboration',
    'Project Coordination',
  ],

  experiences: [
    {
      company: 'Tastea',
      position: 'Team Lead Supervisor',
      from: 'June 2020',
      to: 'June 2022',
      description: [
        'Supervised team operations, maintained product quality, and ensured compliance with service standards.',
        'Managed inventory and stock levels to optimize efficiency and reduce waste.',
        'Delivered performance evaluations and suggestions to upper management to enhance staff productivity.',
      ],
    },
    // You can add more engineering-related or internship experiences here in the future
  ],

  educations: [
    {
      institution: 'California State University, Long Beach',
      degree: 'B.S. in Computer Engineering',
      from: 'August 2019',
      to: 'May 2025',
    },
  ],

  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Made with GitProfile and ❤️`,
  enablePWA: true,
};

export default CONFIG;
