const CONFIG = {
  github: {
    username: 'JIBGuzman',
  },

  base: '/',

  projects: {
    github: {
      display: false,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 11,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [
        ],
      },
    },

    external: {
      header: 'My Projects',
      projects: [
      {
        title: 'Embedded Systems Initialization Hub',
        description:
          'An embedded system on the STM32F7 microcontroller that integrates and controls various peripherals including timers, PWM, UART, I2C, SPI, and sensors, demonstrating real-time features such as LED fading with PWM and UART debugging, while laying the groundwork for advanced timer functions and interactive control through UART.',
        imageUrl:
          'https://raw.githubusercontent.com/JIBGuzman/Joseph-Guzman-website-assets/main/Project-Icons/embedded_systems_initialization_hub.png',
        link: 'https://github.com/JIBGuzman/Embedded_Systems_Initialization_Hub',
      },  
      {
        title: 'Automated Pill Dispenser',
        description:
          'Automated medication management system using NUCLEO-F767ZI and Raspberry Pi 5 with biometric security, dispensing modes, object recognition, 7" touchscreen, MySQL logging, and modular storage for 16+ medications.',
        imageUrl:
          'https://raw.githubusercontent.com/JIBGuzman/Joseph-Guzman-website-assets/main/Project-Icons/automated-pill-dispenser.png',
        link: 'https://github.com/JIBGuzman/DR.PILL_The_Automated_Pill_Dispenser',
      },
      {
        title: 'Bluetooth Car',
        description:
          'Dual-mode robotic system using TM4C123 and HC-05 Bluetooth for wireless/manual navigation with PWM motor control and Hall-effect feedback.',
        imageUrl:
          'https://raw.githubusercontent.com/JIBGuzman/Joseph-Guzman-website-assets/main/Project-Icons/bluetooth-car.png',
        link: 'https://github.com/JIBGuzman/Bluetooth_Car',
      },
      {
        title: 'Piano Project',
        description:
          'Touch keypad microcontroller-based piano with R/2R DAC for 3-octave live play and automated MIDI playback.',
        imageUrl:
          'https://raw.githubusercontent.com/JIBGuzman/Joseph-Guzman-website-assets/main/Project-Icons/piano-project.jpg',
        link: 'https://github.com/JIBGuzman/Piano_Project',
      },
      {
        title: 'I2C Network Communication',
        description:
          'Multi-device I2C network with TM4C123 master, sensors, LCD, PWM servo, and pull-up resistor stability.',
        imageUrl:
          'https://raw.githubusercontent.com/JIBGuzman/Joseph-Guzman-website-assets/main/Project-Icons/i2c-network-communcation.png',
        link: 'https://github.com/JIBGuzman/I2C_Network_Communication',
      },
      {
        title: 'Weather Quest',
        description:
          'IoT weather station using OpenWeatherMap API with ST7735 display, animated icons, and UART location query.',
        imageUrl:
          'https://raw.githubusercontent.com/JIBGuzman/Joseph-Guzman-website-assets/main/Project-Icons/weather-quest.png',
        link: 'https://github.com/JIBGuzman/Weather_Quest',
      },
      {
        title: 'UART Communication System',
        description:
          'Cross-device UART chat with synchronized RGB LED control and DMA brightness optimization.',
        imageUrl:
          'https://raw.githubusercontent.com/JIBGuzman/Joseph-Guzman-website-assets/main/Project-Icons/UART-Communication.png',
        link: 'https://github.com/JIBGuzman/UART_Communication_System',
      },
      {
        title: 'Receipt Generator',
        description:
          'Console POS system with SKU inventory, cart, tax calculation, and receipt creation.',
        imageUrl:
          'https://raw.githubusercontent.com/JIBGuzman/Joseph-Guzman-website-assets/main/Project-Icons/receipt-generator.jpg',
        link: 'https://github.com/JIBGuzman/Market',
      },
      {
        title: 'FSM Traffic Light System',
        description:
          'Two-way traffic light controller with Moore FSM, sensor input, and SysTick delays.',
        imageUrl:
          'https://raw.githubusercontent.com/JIBGuzman/Joseph-Guzman-website-assets/main/Project-Icons/FSM-Traffic_Light.jpg',
        link: 'https://github.com/JIBGuzman/Embedded_Systems/tree/main/CECS_346_Project_1',
        },
      ],
    },
  },

  seo: {
    title: 'Portfolio of Joseph Guzman',
    description: 'Computer Engineering graduate with embedded systems, software, and hardware experience.',
    imageURL: 'https://avatars.githubusercontent.com/u/0000000?v=4', // Replace with your GitHub avatar or photo if uploading to assets repo
  },

  social: {
    linkedin: 'josephguzmani',
    x: '',
    website: '',
    phone: '+1 (562) 377-8286', 
    email: 'JosephGuzmanIGNB@gmail.com',
  },

  resume: {
    // Adjust path and capitalization as needed
    fileUrl:
      'https://raw.githubusercontent.com/JIBGuzman/Joseph-Guzman-website-assets/main/Resume/Joseph_Guzman_Resume_2025.pdf',
  },

  skills: [
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
    'STM32CubeIDE',
    'Vivado',
    'Keil uVision',
    'VS Code',
    'SolidWorks',
    'Shapr3D',
    'Git',
    'GitHub',
    'MySQL',
    'Linux',
    'VirtualBox',
    'Jupyter Notebook',
    'LTspice',
    'I2C',
    'UART',
    'SPI',
    'PWM',
    'Circuit Design',
    'Testing',
    'Calibration',
    'Troubleshooting',
    'Hardware Assembly',
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
        'Supervised operations, maintained product quality, and ensured compliance with standards.',
        'Managed inventory and optimized stock levels.',
        'Delivered performance evaluations and improvement plans.',
    },
    {
      company: 'Mach Industries (Contractor)',
      position: 'Avionic Integration Technician',
      from: 'Nov 2024',
      to: 'Present',
      description: [
        'Avionic integration technician supporting build through precise verification, test data collection.',
        'Refined work orders for vehicle subassembly test via-training hardware verification.',
        'PCB bring-up and functional testing, enhancing production readiness and operational workflows.',
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
