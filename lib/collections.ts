export interface Project {
  id: string;
  title: string;
  description: string;
  cover: string;
  images: string[];
  date?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  cover: string;
  projects: Project[];
}

export const categoriesData: Category[] = [
  {
    id: "mariage",
    name: "Mariage",
    description: "Capturer l'amour éternel, les regards complices et les moments d'émotion pure qui font la beauté d'un mariage.",
    cover: "/mariage1.jpg",
    projects: [
      {
        id: "mariage-exemple-1",
        title: "Mariage Amet & Bineta",
        description: "Une union élégante célébrée au cœur de Dakar, mêlant tradition et modernité.",
        cover: "/mariage1.jpg",
        images: ["/mariage1.jpg", "/mariage2.jpg", "/mariage3.jpg", "/mariage4.jpg"],
        date: "Janvier 2024",
      },
      {
        id: "mariage-exemple-2",
        title: "Mariage Omar & Fatou",
        description: "Une célébration intime et chaleureuse, capturant l'essence de leur complicité.",
        cover: "/mariage5.jpg",
        images: ["/mariage5.jpg", "/mariage6.jpg", "/mariage7.jpg", "/mariage8.jpg"],
        date: "Février 2024",
      }
    ]
  },
  {
    id: "portrait",
    name: "Portrait",
    description: "Révéler l'essence de chaque personnalité à travers un regard, une expression, une histoire.",
    cover: "/me.jpg",
    projects: [
      {
        id: "portrait-studio",
        title: "Série Studio - Al Amine",
        description: "Portraits professionnels mettant en avant la personnalité et le charisme.",
        cover: "/me.jpg",
        images: ["/me.jpg"],
        date: "2024",
      }
    ]
  },
  {
    id: "mode",
    name: "Mode",
    description: "L'art de sublimer le style, capturer l'élégance et créer des images iconiques.",
    cover: "",
    projects: []
  },
  {
    id: "evenementiel",
    name: "Événementiel",
    description: "Immortaliser l'énergie des grands moments, des célébrations et des rencontres mémorables.",
    cover: "",
    projects: []
  }
];
