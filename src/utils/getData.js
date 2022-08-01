import * as Icon from './getIcon';

const getCategories = () => [
  {
    id: 'sports',
    title: 'Sports',
    subTitle: '20 Courses',
    iconPath: Icon.Sport,
  },
  {
    id: 'photography',
    title: 'Photography',
    subTitle: '18 Courses',
    iconPath: Icon.Photography,
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    subTitle: '10 Courses',
    iconPath: Icon.Paint,
  },
  {
    id: 'accounting',
    title: 'Accounting',
    subTitle: '16 Courses',
    iconPath: Icon.Dashboard,
  },
  {
    id: 'logic',
    title: 'Logic',
    subTitle: '8 Courses',
    iconPath: Icon.Puzzle,
  },
  {
    id: 'marketing',
    title: 'Marketing',
    subTitle: '21 Courses',
    iconPath: Icon.Marketing,
  },
  {
    id: 'finance',
    title: 'Finance',
    subTitle: '14 Courses',
    iconPath: Icon.Wallet,
  },
  {
    id: 'fishing',
    title: 'Fishing',
    subTitle: '4 Courses',
    iconPath: Icon.Fishing,
  },
];

const getCourses = () => [
  {
    id: 1,
    title: 'Figma UI/UX Design Essential',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non congue arcu. Phasellus mollis pretium.',
    category: 'graphic-design',
    rating: '4.8 (18.1k)',
    price: 135000,
    chapterQty: '22',
    courseList: [
      {
        id: 1,
        title: 'Introduction',
        isLocked: false,
        duration: '02:18',
        videoURL: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 2,
        title: 'What is UI/UX Design?',
        isLocked: false,
        duration: '18:46',
        videoURL: 'https://www.youtube.com/embed/Fp8msa5uYsc',
      },
      {
        id: 3,
        title: 'How to make a wireframe',
        isLocked: true,
        duration: '20:58',
        videoURL: 'https://www.youtube.com/embed/R9At2ICm4LQ',
      },
    ],
    wishlist: true,
    isBought: false,
  },
  {
    id: 2,
    title: 'Figma UI/UX Design Essential',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non congue arcu. Phasellus mollis pretium.',
    category: 'sports',
    rating: '4.8 (18.1k)',
    price: 135000,
    chapterQty: '22',
    courseList: [
      {
        id: 1,
        title: 'Introduction',
        isLocked: false,
        duration: '02:18',
        videoURL: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 2,
        title: 'What is UI/UX Design?',
        isLocked: true,
        duration: '18:46',
        videoURL: 'https://www.youtube.com/embed/Fp8msa5uYsc',
      },
      {
        id: 3,
        title: 'How to make a wireframe',
        isLocked: true,
        duration: '20:58',
        videoURL: 'https://www.youtube.com/embed/R9At2ICm4LQ',
      },
    ],
    wishlist: true,
    isBought: false,
  },
  {
    id: 3,
    title: 'Figma UI/UX Design Essential',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non congue arcu. Phasellus mollis pretium.',
    category: 'graphic-design',
    rating: '4.8 (18.1k)',
    price: 135000,
    chapterQty: '22',
    courseList: [
      {
        id: 1,
        title: 'Introduction',
        isLocked: false,
        duration: '02:18',
        videoURL: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 2,
        title: 'What is UI/UX Design?',
        isLocked: false,
        duration: '18:46',
        videoURL: 'https://www.youtube.com/embed/Fp8msa5uYsc',
      },
      {
        id: 3,
        title: 'How to make a wireframe',
        isLocked: true,
        duration: '20:58',
        videoURL: 'https://www.youtube.com/embed/R9At2ICm4LQ',
      },
    ],
    wishlist: true,
    isBought: false,
  },
  {
    id: 4,
    title: 'Figma UI/UX Design Essential',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non congue arcu. Phasellus mollis pretium.',
    category: 'graphic-design',
    rating: '4.8 (18.1k)',
    price: 135000,
    chapterQty: '22',
    courseList: [
      {
        id: 1,
        title: 'Introduction',
        isLocked: false,
        duration: '02:18',
        videoURL: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 2,
        title: 'What is UI/UX Design?',
        isLocked: false,
        duration: '18:46',
        videoURL: 'https://www.youtube.com/embed/Fp8msa5uYsc',
      },
      {
        id: 3,
        title: 'How to make a wireframe',
        isLocked: true,
        duration: '20:58',
        videoURL: 'https://www.youtube.com/embed/R9At2ICm4LQ',
      },
    ],
    wishlist: false,
    isBought: false,
  },
  {
    id: 5,
    title: 'Figma UI/UX Design Essential',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non congue arcu. Phasellus mollis pretium.',
    category: 'graphic-design',
    rating: '4.8 (18.1k)',
    price: 135000,
    chapterQty: '22',
    courseList: [
      {
        id: 1,
        title: 'Introduction',
        isLocked: false,
        duration: '02:18',
        videoURL: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 2,
        title: 'What is UI/UX Design?',
        isLocked: false,
        duration: '18:46',
        videoURL: 'https://www.youtube.com/embed/Fp8msa5uYsc',
      },
      {
        id: 3,
        title: 'How to make a wireframe',
        isLocked: true,
        duration: '20:58',
        videoURL: 'https://www.youtube.com/embed/R9At2ICm4LQ',
      },
    ],
    wishlist: false,
    isBought: false,
  },
];

const getMyCourses = () => [
  {
    id: 1,
    title: 'Figma UI/UX Design Essential',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non congue arcu. Phasellus mollis pretium.',
    category: 'graphic-design',
    rating: '4.8 (18.1k)',
    price: 135000,
    completed: 12,
    chapterQty: 22,
    courseList: [
      {
        id: 1,
        title: 'Introduction',
        isLocked: false,
        duration: '02:18',
        videoURL: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 2,
        title: 'What is UI/UX Design?',
        isLocked: false,
        duration: '18:46',
        videoURL: 'https://www.youtube.com/embed/Fp8msa5uYsc',
      },
      {
        id: 3,
        title: 'How to make a wireframe',
        isLocked: false,
        duration: '20:58',
        videoURL: 'https://www.youtube.com/embed/R9At2ICm4LQ',
      },
    ],
    favorite: true,
    isBought: true,
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'sports',
    rating: '4.8 (18.1k)',
    price: 135000,
    favorite: false,
    completed: 8,
    chapterQty: 9,
  },
  {
    id: 3,
    title: 'How to be a bank robber 101',
    category: 'accounting',
    rating: '4.8 (18.1k)',
    price: 135000,
    favorite: true,
    completed: 4,
    chapterQty: 17,
  },
];

export { getCategories, getCourses, getMyCourses };