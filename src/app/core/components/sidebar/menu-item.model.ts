export interface MenuItem {
    title: string;
    icon: string;
    link: string | null;
    badge: string | null;
    subItems: {
      title: string;
      link: string;
    }[];
  }