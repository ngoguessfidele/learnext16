export interface EventItem {
  title: string;
  slug: string;
  image: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "React Summit",
    slug: "react-summit-2026",
    image: "/images/event1.png",
    location: "Amsterdam, Netherlands & Online",
    date: "2026-02-12",
    time: "09:00 AM"
  },
  {
    title: "Google I/O",
    slug: "google-io-2026",
    image: "/images/event2.png",
    location: "Mountain View, CA & Online",
    date: "2026-05-14",
    time: "10:00 AM"
  },
  {
    title: "AWS re:Invent",
    slug: "aws-reinvent-2026",
    image: "/images/event3.png",
    location: "Las Vegas, NV",
    date: "2026-11-30",
    time: "08:00 AM"
  },
  {
    title: "Microsoft Build",
    slug: "microsoft-build-2026",
    image: "/images/event4.png",
    location: "Seattle, WA & Online",
    date: "2026-05-20",
    time: "09:00 AM"
  },
  {
    title: "JSConf EU",
    slug: "jsconf-eu-2026",
    image: "/images/event5.png",
    location: "Berlin, Germany",
    date: "2026-06-18",
    time: "09:30 AM"
  },
  {
    title: "HackMIT",
    slug: "hackmit-2026",
    image: "/images/event6.png",
    location: "Cambridge, MA",
    date: "2026-10-03",
    time: "12:00 PM"
  },
  {
    title: "NodeConf",
    slug: "nodeconf-2026",
    image: "/images/event-full.png",
    location: "Online & Regional Hubs",
    date: "2026-09-15",
    time: "11:00 AM"
  }
];

export default events;
