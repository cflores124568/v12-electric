export type ReviewSource = "Google" | "Thumbtack";

export interface ReviewProof {
  id: string;
  source: ReviewSource;
  author: string;
  rating: 5;
  date: string;
  text: string;
  excerpt?: string;
  photo?: { src: string; alt: string };
}

/**
 * Selected written reviews from the source project. Quoted wording and attribution are kept
 * intact so the proof remains authentic; authored V12 copy around the quotes is rebranded.
 */
export const reviewProof: ReviewProof[] = [
  {
    id: "google-kirk-b",
    source: "Google",
    author: "Kirk B.",
    rating: 5,
    date: "",
    text: "Came out on short notice and solved our electrical issue. Eric gave very detailed explanation of all services being recommended. They even agreed to return later the same day to install a couple of pendant lights as well. The service was friendly and affordable. We will definitely be calling TruLuxe for all electrical issues in the future.",
    excerpt:
      "Came out on short notice and solved our electrical issue. Eric gave very detailed explanation of all services being recommended.",
    photo: {
      src: "/images/proof/reviews/kirk-b-pendants.webp",
      alt: "Mid-century pendant lights installed over a dining area",
    },
  },
  {
    id: "google-louise-ch",
    source: "Google",
    author: "Louise C. H.",
    rating: 5,
    date: "a year ago",
    text: "Our new Go-To Electrician!! Eric, the owner of TruLuxe Electric, may appear to be just a kid, but he has years of solid experience behind him. He's thorough and thoughtful about his work. He installed two new GFCI outlets in our primary bathroom. Eric showed up on time and performed the work in a very timely manner! He cleaned up after himself as well! We would hire him again in a heartbeat!",
  },
  {
    id: "google-john-r",
    source: "Google",
    author: "John R.",
    rating: 5,
    date: "2 years ago",
    text: "I found TruLuxe on a Sunday, after discovering none of the outlets in my garage were working. Eric answered my call and was at my house in less than 2 hours on a Sunday. He found the cause of the problem and fixed it quickly. He was professional, on-time, and reasonably priced. Would definitely use him again.",
  },
  {
    id: "google-derek-g",
    source: "Google",
    author: "Derek G.",
    rating: 5,
    date: "2 months ago",
    text: "So happy I found Truluxe! I've worked with many electricians over the years and this has been the best experience I can remember. Eric is skilled, punctual, and courteous! He also put in extra time to make sure the job not only met my expectations, but exceeded them! I will not go anywhere else for my future needs. Very highly recommended!!!",
  },
  {
    id: "google-sam-s",
    source: "Google",
    author: "Sam S.",
    rating: 5,
    date: "a year ago",
    text: "Eric was fantastic to work with. He was prompt. He was communicative. He listened. And then he put together a plan and made it all happen. I had consulted at least five others to install a neon light on a brick fireplace wall and ALL said it couldn't be done. Eric got it done. I couldn't be happier and will utilize Eric in the future for any electrical needs and recommend him to my friends and neighbors.",
    photo: {
      src: "/images/proof/reviews/sam-s-neon-heart.webp",
      alt: "Neon heart light installed on a brick fireplace wall",
    },
  },
  {
    id: "thumbtack-annie-o",
    source: "Thumbtack",
    author: "Annie O.",
    rating: 5,
    date: "6/30/2025",
    text: "It was great working with Eric. Communication was easy. Chandelier installation went smoothly and was done quickly. I would hire TruLuxe Electric again. Thank you!",
  },
  {
    id: "thumbtack-bram-h",
    source: "Thumbtack",
    author: "Bram H.",
    rating: 5,
    date: "1/29/2025",
    text: "I used TruLuxe to fix some electrical issues at my rental condo. There was a wall of appliances that were not working and it wasn't a breaker issue. They were able to diagnose and repair the problem, and were available same day (which was very helpful). I recommend them to other customers.",
  },
  {
    id: "thumbtack-brian-l",
    source: "Thumbtack",
    author: "Brian L.",
    rating: 5,
    date: "9/22/2024",
    text: "Eric showed up less than two hours after I put in a service request on a Sunday afternoon. He was prompt, communicative, and professional. His price quote was reasonable and he didn't try to add other charges at the end which I've run into before. I also appreciated that he explained to me what he was doing and why. Would definitely hire him again.",
    photo: {
      src: "/images/proof/reviews/brian-l-linear-pendant.webp",
      alt: "Linear wood LED pendant light installed for a customer",
    },
  },
  {
    id: "thumbtack-tracey-c",
    source: "Thumbtack",
    author: "Tracey C.",
    rating: 5,
    date: "10/7/2024",
    text: "Eric was communicative from the moment we interacted on Thumbtack to the completion of the project. In addition to being communicative, he was punctual, professional, and clearly an expert in his field of electrical work. An impressive young man who I would hire again and highly recommend to others.",
  },
  {
    id: "google-gary-w",
    source: "Google",
    author: "Gary W.",
    rating: 5,
    date: "a month ago",
    text: "Excellent work; awesome guys; top notch all around.",
    photo: {
      src: "/images/proof/reviews/gary-w-chandelier.webp",
      alt: "Two-tier candelabra chandelier installed in a high-ceiling living room",
    },
  },
] as const;

export const reviewSources = ["Google", "Thumbtack"] as const;
