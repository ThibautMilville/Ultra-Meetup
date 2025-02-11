import { Event } from "../types";

export const events: Event[] = [
  {
    id: "1",
    title: "Metaviso X Ultra - Exclusive NFT Paris Event",
    description: "Attend an insightful evening featuring expert speeches from Ultra and Metavision - Thomson Computing. Discover the future of gaming through discussions on blockchain technology, digital ownership, and the innovations shaping the industry.",
    longDescription: `Join the community for an exclusive evening on a private boat during NFT Paris, co-hosted by Metavisio and Ultra. This event will bring together industry leaders, investors, and Web3 enthusiasts for a high-level networking experience.

The night will feature insightful speeches, a live DJ, premium cocktails, a curated food selection, and a 2-hour cruise along the Seine, providing the perfect setting for meaningful discussions and collaborations.

📅 Date & Time: Saturday, February 13, 2025, at 7:00 PM
📍 Location: 4 Quai Saint-Bernard, 75005 Paris, France
🍽️ Experience:
- Welcome drinks and networking
- Speeches and panel discussions
- Exclusive Seine River Cruise (Networking, DJ, cocktails, and food)
- Afterparty on the boat

🎤 Speakers:
Stephan Français: CEO of Metaviso Thomson Computing, a French company specializing in affordable personal computers.

Gus van Rijckevorsel: seasoned entrepreneur and transformational leader, currently serving as the CEO of Ultra, a pioneering company in the Web3 gaming space. With a track record of building and scaling businesses, Gus is redefining Ultra's trajectory with bold strategies and a pragmatic, results-driven approach.

Alexander Rees-Evans: GTM advisor for Code Craft, Techstars mentor, author of "How to launch a token", President of the Blockchain commission of the World Business Union.

Sofiane Delloue: CEO of NewCoin, he is a polymath, system thinker and entrepreneur working at the intersection of AI and crypto for the past six years and member of the MIT consortium on decentralized AI standards.

⚠️ Important: Once the boat departs, no entry or exit will be possible until we return at 23:00. Please ensure you arrive on time.

This event is invite-only. Secure your spot by registering via Lu.ma. Access will be granted via QR code check-in and a VIP guest list. The exact location will be shared after confirmation.

Please note, there will be filming and photography on-site at the event and by attending you consent to appearing in the images and recordings captured.`,
    date: "2025-02-13T19:00:00",
    location: "4 Quai Saint-Bernard, 75005 Paris, France",
    imageUrl: "/pictures/boat-party.jpg",
    isPast: false,
    organizer: {
      name: "Ultra",
      role: "Gaming platform",
      description: "Ultra is a blockchain-based gaming platform that allows players to buy, sell, and own in-game assets. The platform is designed to be a one-stop shop for all things gaming, including games, tournaments, and virtual goods.",
    },
    schedule: [
      {
        time: "19:00 - 20:00",
        activity: "Guest check-in, networking, and welcome drinks",
      },
      {
        time: "20:00 - 21:00",
        activity: "Speeches and panel discussions",
      },
      {
        time: "21:00 - 23:00",
        activity: "Exclusive Seine River Cruise (Networking, DJ, cocktails, and food)",
      },
      {
        time: "23:00 - 01:00",
        activity: "Afterparty on the boat",
      },
    ],
    registrationLink: "https://lu.ma/ultra-gaming-revolution",
  },
  {
    id: "2",
    title: "Ultra Meetup - NFT Paris 2025",
    description: "Come hang out with us for a laid-back evening chatting about the future of gaming with Ultra.io! We’ll dive into blockchain gaming, digital ownership, and how Ultra is shaking things up—all over some good drinks and great company.",
    longDescription: `Join us for an exclusive gathering hosted by Ultra Times at Le 17-45, an elegant venue in the heart of Paris.

📅 Date & Time: Friday, February 14, 2025, at 7:00 PM
📍 Location: Le 17-45, 49 rue Jean-Baptiste Pigalle, 75009 Paris
🍽️ Experience: Enjoy a delightful selection of aperitif platters in a warm and friendly atmosphere.

This is a unique opportunity to meet fellow community members, engage in great conversations, and share unforgettable moments.

💬 Need more info? Connect with us on our Ultra Times Discord: https://discord.gg/UsZVKXjB

Will you be joining us? Let us know and get ready for an amazing night!`,
    date: "2025-02-14T19:00:00",
    location: "Le 17-45, 49 rue Jean-Baptiste Pigalle, 75009 Paris",
    imageUrl: "/pictures/apero.jpg",
    isPast: false,
    organizer: {
      name: "Ultra Times",
      role: "Community organization",
      description: "Ultra Times is a fan organization around the Ultra.io project and a media dedicated to Web3 gaming. Our goal is to help Ultra achieve its vision and become inevitable in the gaming world.",
    },
    schedule: [
      {
        time: "19:00 - 21:30",
        activity: "Apero among Ultra community members",
      },
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc7Y4pnI_c6wEg8pDHChuP7VynFmoQy2eqwJ6FH8q_p1KMskw/viewform?usp=header",
  },
];
