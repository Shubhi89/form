import type { Product, Testimonial, FeatureSectionData, TrustBadge , NutritionCategory } from '../types/index';
import { Activity, Scale , Zap , Sparkles, User } from 'lucide-react';
import dentpure from '../assets/dentPure.png';
import truefem from '../assets/trueFem.png';
import vitarenew from '../assets/vitaRenew.png';
import prostazen from '../assets/postazen.png';
import nervefreedom from '../assets/nervefreedom.png';
import Leaf from '../assets/first.png'
import ShieldCheck from '../assets/second.png'
import RefreshCw from '../assets/third.png'
import Heart from '../assets/four.png'
import activity from '../assets/fifth.png'
import natural from '../assets/natural.jpg'
import research from '../assets/research.jpg'
import eco from '../assets/eco.jpg'
import testobite from '../assets/testobite.png'

export const PRODUCTS_DATA: Product[] = [
  {
    id: '1',
    name: 'dentpure',
    image: dentpure,
    rating: 5,
    tags: ['Dental', 'Hygiene'],
  },
  {
    id: '2',
    name: 'True Fem',
    image: truefem,
    rating: 5,
    tags: ['Women', 'Health'],
  },
  {
    id: '3',
    name: 'Vita Renew',
    image: vitarenew,
    rating: 5,
    tags: ['Energy', 'Vitality'],
  },
  {
    id: '4',
    name: 'ProstaZen',
    image: prostazen,
    rating: 5,
    tags: ['Men', 'Health'],
  },
  {
    id: '5',
    name: 'Nerve Freedom',
    image: nervefreedom,
    rating: 5,
    tags: ['Nerve', 'Relief'],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    author: 'Ryan R.',
    productName: 'TestoBites',
    productImage: testobite,
    content: "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
    rating: 5,
  },
  {
    id: '2',
    author: 'Jamie Fields',
    productName: 'Vita Renew',
    productImage: vitarenew,
    content: "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
    rating: 5,
  },
  {
    id: '3',
    author: 'Anonymous',
    productName: 'Nerve Freedom',
    productImage: nervefreedom,
    content: "I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.",
    rating: 5,
  },
];

export const FEATURES_DATA: FeatureSectionData[] = [
  {
    title: "100% Natural Components",
    subtitle: "Nature-Powered Wellness You Can Trust",
    description: "We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance.",
    image: natural,
    reverse: false,
  },
  {
    title: "Research-Backed Formulations",
    subtitle: "Formulated with Clinically Tested Ingredients",
    description: "We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit.",
    image: research,
    reverse: true,
  },
  {
    title: "Eco-Conscious Manufacturing",
    subtitle: "Sustainable from Source to Shelf",
    description: "Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment to reducing our carbon footprint, we create wellness solutions.",
    image: eco,
    reverse: false,
  },
];

export const TRUST_BADGES: TrustBadge[] = [
  { image: Leaf, label: "All Natural" },
  { image: ShieldCheck, label: "Cruelty-Free" },
  { image: RefreshCw, label: "Money-back Guarantee" },
  { image: Heart, label: "Giving back" },
  { image: activity, label: "Non-GMO" },
];

export const NUTRITION_CATEGORIES: NutritionCategory[] = [
  { id: '1', title: 'Weight Loss', description: 'Shop trusted weight loss products that help boost metabolism.', icon: Scale },
  { id: '2', title: 'Nerve Pain', description: 'Find relief with nerve pain products formulated to soothe discomfort.', icon: Zap },
  { id: '3', title: 'Skin Care', description: 'Explore premium skincare products that nourish, protect, and enhance.', icon: Sparkles },
  { id: '4', title: 'Men’s Health', description: 'Discover men’s health products designed to boost energy & strength.', icon: Activity },
  { id: '5', title: 'Women’s Health', description: 'Explore women’s health products that support hormonal balance.', icon: User },
];

