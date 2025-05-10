// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'JIBGuzman', // Your GitHub org/user name
  },

  // If deploying to https://JIBGuzman.github.io/, set base to '/'
  // If deploying to https://JIBGuzman.github.io/gitprofile/, set base to '/gitprofile/'
  base: '/gitprofile/',

  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic', // 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars',
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
          imageUrl: '',
          link: '',
        },
        {
          title: 'Bluetooth Car',
          description:
            'Dual-mode robotic system using TM4C123 and HC-05 Bluetooth for wireless manual and autonomous navigation, PWM motor drivers, Hall-effect sensor feedback, and LED status indicators.',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Piano Project',
          description:
            'Microcontroller-based instrument with touch keypad input and R/2R ladder DAC audio output, supporting live performance (3-octave range) and automated music box playback of MIDI sequences.',
          imageUrl: '',
          link: '',
        },
        {
          title: 'I2C Network Communication',
          description:
            'Multi-device I2C network with TM4C123 master, TCS34725 color sensor, MPU6050 gyro, 16x2 LCD, PWM servo control, and dual 4.7kΩ pull-up resistors for stable communication.',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Weather Quest',
          description:
            'IoT weather station with WiFi API integration (OpenWeatherMap), ST7735 display, animated icons, multi-location query via UART, and real-time temperature/humidity updates.',
          imageUrl: '',
          link: '',
        },
        {
          title: 'UART Communication System',
          description:
            'Cross-device protocol enabling PC-to-microcontroller chat relay, synchronized RGB LED color cycling, and DMA-optimized brightness control with configurable baud rates.',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Receipt Generator',
          description:
            'Console-based point-of-sale system with SKU inventory, real-time cart updates, dual payment processing, dynamic tax calculation, and automated receipt generation.',
          imageUrl: '',
          link: '',
        },
        {
          title: 'FSM Traffic Light System',
          description:
            'Advanced traffic light controller for two-street intersection using TM4C123, real-time sensor input, Moore FSM, SysTick-based delays, hardware debouncing, and logic analyzer validation.',
          imageUrl: '',
          link: '',
        },
      ],
    },
  },

  seo: {
    title: 'Portfolio of Joseph Guzman',
    description: 'Computer Engineering graduate with embedded systems, software, and hardware experience.',
    imageURL: '', // Add a profile image URL if you have one
  },

  social: {
    linkedin: 'josephguzmani',
    x: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '', // Add your email if you want it public
  },

  resume: {
    fileUrl: 'https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/66769807/e6c186e2-768d-4aa1-856e-1fb72cd16909/RESUME_2025_Joseph_Guzman-1.pdf',
  },

  skills: [
    'C/C++',
    'Python',
    'MATLAB',
    'Verilog',
    'Java',
    'JavaScript',
    'SQL',
    'HTML',
    'Assembly',
    'Keil uVision',
    'VS Code',
    'Vivado',
    'STM32CubeIDE',
    'SolidWorks',
    'Shapr3D',
    'Linux',
    'Git',
    'GitHub',
    'MySQL',
    'VirtualBox',
    'Jupyter Notebook',
    'Thonny',
    'Replit',
    'LTspice',
    'Embedded Systems',
    'I2C',
    'UART',
    'SPI',
    'PWM',
    'Circuit Design',
    'Testing',
    'Calibration',
    'Troubleshooting',
    'Hardware Assembly/Disassembly',
    'Leadership',
    'Team Building',
    'Management',
  ],

  experiences: [
    {
      company: 'Tastea',
      position: 'Team Lead Supervisor',
      from: 'July 2020',
      to: 'July 2022',
      companyLink: '',
      description: [
        'Handled all matters and procedures while meeting company standards.',
        'Managed inventory to verify the quality and quantity of products.',
        'Observed staff performance and constructed feedback for upper management on improving productivity.',
      ],
    },
  ],

  certifications: [
    // Add certifications here if you have any
  ],

  educations: [
    {
      institution: 'California State University of Long Beach',
      degree: 'B.S. in Computer Engineering',
      from: 'August 2019',
      to: 'May 2025',
    },
  ],

  publications: [
    // Add publications here if you have any
  ],

  blog: {
    source: '', // medium | dev
    username: '',
    limit: 0,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
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

