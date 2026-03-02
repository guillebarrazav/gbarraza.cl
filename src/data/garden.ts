export type CardSize = "1x1" | "2x1";

export interface GardenItem {
    category: string;
    title: string;
    subtitle: string;
    image: string;
    link: string;
    size: CardSize; // ← change this to resize a card: "1x1" or "2x1"
}

export const gardenItems: GardenItem[] = [
    {
        category: "Music",
        title: "Into the Wild",
        subtitle: "Eddie Vedder",
        image: "/images/into-the-wild.png",
        link: "#",
        size: "2x1",
    },
    {
        category: "Books",
        title: "Fire & Blood",
        subtitle: "George R.R. Martin",
        image: "/images/book-fire-and-blood.jpg",
        link: "#",
        size: "1x1",
    },
    {
        category: "Hobbies",
        title: "Photography",
        subtitle: "Capturing light",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "#",
        size: "1x1",
    },
];
