import grid1 from "/images/grid1.jpg";
import grid2 from "/images/grid2.jpg";


export interface EventsData {
  id: string;
  name: string;
  date: string;
  thumbnail: string;
  pin: string;
  driveUrl: string;
  active: boolean;
  expiryDate: string;
}

export const events: EventsData[] = [
  {
    id: "wedding-smith-jones-2025",
    name: "Smith & Jones Wedding",
    date: "2025-03-10",
    thumbnail: grid1,
    pin: "SJ2025",
    driveUrl: "https://drive.google.com/drive/folders/abc123xyz",
    active: true,
    expiryDate: "2025-06-10",
  },
  {
    id: "anniversary-miller-2025",
    name: "Miller 25th Anniversary",
    date: "2025-02-15",
    thumbnail: grid2,
    pin: "ML2525",
    driveUrl: "https://drive.google.com/drive/folders/def456uvw",
    active: true,
    expiryDate: "2025-05-15",
  },
];
